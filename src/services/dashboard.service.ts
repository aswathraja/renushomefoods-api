import { Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs';
import * as handlebars from 'handlebars';
import * as path from 'path';
import * as puppeteer from 'puppeteer';
import { sequelize } from '../database/db';

@Injectable()
export class AdminDashboardPdfService {
	private readonly logger = new Logger(AdminDashboardPdfService.name);
	private readonly salesTemplatePath = path.join(
		__dirname,
		'..',
		'templates',
		'admin-dashboard-pdf.html',
	);
	private readonly inventoryTemplatePath = path.join(
		__dirname,
		'..',
		'templates',
		'inventory-dashboard-pdf.html',
	);

	private mapToInventoryFilters(filters: any) {
		return {
			categoryIds: JSON.stringify(filters.categoryIds || filters.selectedCategoryIds || []),
			itemIds: JSON.stringify(filters.itemIds || filters.selectedItemIds || []),
			locationIds: JSON.stringify(filters.locationIds || filters.selectedLocationIds || []),
			fromDate: filters.fromDate ? this.adjustDate(filters.fromDate, 'start') : null,
			toDate: filters.toDate ? this.adjustDate(filters.toDate, 'end') : null,
		};
	}

	private async fetchInventoryKPIs(inventoryFilters: any) {
		const results = await sequelize.query(
			'CALL GetInventoryKPIs(:categoryIds, :itemIds, :locationIds, :fromDate, :toDate)',
			{ replacements: inventoryFilters },
		);
		return results[0] || {};
	}

	private async fetchInventoryChartData(inventoryFilters: any) {
		const { logger } = this;
		const types = ['byCategory', 'byLocation', 'byItem', 'topItems'];
		const chartData: any = {};
		for (const type of types) {
			const results = await sequelize.query(
				'CALL GetInventoryChartData(:type, :categoryIds, :itemIds, :locationIds, :fromDate, :toDate)',
				{ replacements: { ...inventoryFilters, type } },
			);
			const keyMap = {
				byCategory: 'stockbycategory',
				byLocation: 'stockbylocation',
				byItem: 'stockbyitems',
				topItems: 'stockbytopitems',
			};
			chartData[keyMap[type]] = results || [];
		}
		return chartData;
	}

	private async _generateDashboardPdf(
		filters: any,
		format: 'pdf' | 'png',
		dashboardType: 'Sales' | 'Inventory' = 'Sales',
	): Promise<Buffer> {
		const browser = await puppeteer.launch({
			headless: true,
			executablePath: process.env.CHROME_PATH,
			args: ['--no-sandbox', '--disable-setuid-sandbox'],
		});

		try {
			const page = await browser.newPage();

			// FIXED: Set high-res viewport for crisp PNG
			await page.setViewport({
				width: 1440,
				height: 1024,
				deviceScaleFactor: 2,
			});

			let kpis: any,
				chartData: any,
				orders: any[] = [],
				templatePath: string,
				isInventory = dashboardType === 'Inventory';

			if (isInventory) {
				const inventoryFilters = this.mapToInventoryFilters(filters);
				kpis = await this.fetchInventoryKPIs(inventoryFilters);
				chartData = await this.fetchInventoryChartData(inventoryFilters);
				templatePath = this.inventoryTemplatePath;
			} else {
				kpis = await this.fetchKpis(filters);
				chartData = await this.fetchChartData(filters);
				orders = await this.fetchOrders(filters);
				templatePath = this.salesTemplatePath;
			}

			// Register Handlebars helpers
			handlebars.registerHelper('take', (arr: any[], n: number) => {
				arr = Array.isArray(arr) ? arr : [arr];
				return arr.slice(0, n);
			});
			handlebars.registerHelper('formatDate', (dateStr: string) =>
				new Date(dateStr).toLocaleDateString(),
			);
			handlebars.registerHelper('eq', (a: any, b: any) => a === b);
			handlebars.registerHelper('mul', (a: number, b: number) => a * b);
			handlebars.registerHelper('div', (a: number, b: number) => a / b);
			handlebars.registerHelper('sub', (a: number, b: number) => a - b);
			handlebars.registerHelper('add', (a: number, b: number) => a + b);
			handlebars.registerHelper('mod', (a: number, b: number) => a % b);
			handlebars.registerHelper('json', (context) => {
				const jsonStr = JSON.stringify(context);
				return jsonStr.replace(/</g, '\\u003c').replace(/>/g, '\\u003e');
			});
			handlebars.registerHelper('or', (...args) => {
				// last argument is the Handlebars options object
				const values = args.slice(0, -1);
				return values.some((value) => !value);
			});
			// Compile template
			const template = handlebars.compile(fs.readFileSync(templatePath, 'utf8'));
			let expectedCanvases = 0;
			for (const key of Object.keys(chartData)) {
				const data = chartData[key];
				if (Array.isArray(data) && data.length > 0) {
					expectedCanvases++;
				} else {
					delete chartData[key];
				}
			}
			const html = template({
				dateRange: this.formatDateRange(filters),
				generatedAt: this.formatDateWithTime(new Date()),
				dashboardType,
				kpis,
				chartData,
				orders,
				orderCount: orders.length,
				isInventory,
			});
			await page.setContent(html, { waitUntil: 'domcontentloaded' });

			// FIXED: Wait for charts to render (4 canvases)
			await page.waitForFunction(
				() => {
					const chartData = (window as any).chartData || {};
					let expectedCanvases = 0;
					const canvasIdMap = {
						stockbycategory: 'stockbycategory-donut',
						stockbylocation: 'stockbylocation-donut',
						stockbyitems: 'stockbyitems-donut',
						stockbytopitems: 'stockbytopitems-bar',
					};
					const expectedCanvasIds = [];
					for (const key of Object.keys(chartData)) {
						const data = chartData[key];
						if (Array.isArray(data) && data.length > 0) {
							expectedCanvases++;
							expectedCanvasIds.push(canvasIdMap[key]);
						}
					}
					let canvases = [];
					if (expectedCanvasIds.length > 0) {
						canvases = expectedCanvasIds.length
							? Array.from(
									document.querySelectorAll<HTMLCanvasElement>(
										expectedCanvasIds.map((id) => `#${id}`).join(', '),
									),
								)
							: [];
					}
					return document.readyState === 'complete';
				},
				{ timeout: 20000 },
			);

			await new Promise((resolve) => setTimeout(resolve, 2000)); // FIXED: waitForTimeout polyfill

			const buffer =
				format === 'pdf'
					? await page.pdf({
							format: 'A4',
							printBackground: true,
							landscape: true,
							preferCSSPageSize: true,
							margin: {
								top: '10mm',
								right: '10mm',
								bottom: '10mm',
								left: '10mm',
							},
						})
					: await page.screenshot({
							type: 'png' as const,
							fullPage: true,
							omitBackground: false,
						});
			return Buffer.from(buffer);
		} finally {
			await browser.close();
		}
	}

	async generateDashboardPdf(
		filters: any,
		format: 'pdf' | 'png',
		dashboardType: 'Sales' | 'Inventory' = 'Sales',
	): Promise<Buffer> {
		const bufferOrUint8 = await this._generateDashboardPdf(filters, format, dashboardType);
		// Ensure Buffer for controller compatibility
		return Buffer.isBuffer(bufferOrUint8) ? bufferOrUint8 : Buffer.from(bufferOrUint8);
	}

	private async fetchKpis(filters: any): Promise<any> {
		const [results] = await sequelize.query(
			'CALL GetDashboardKPIs(:fromDate, :toDate, :orderStatus, :category, :product, :name, :phone)',
			{
				replacements: this.prepareFilters(filters.filterState),
			},
		);
		return results;
	}

	private async fetchChartData(filters: any): Promise<any> {
		const chartTypes = [
			'Total Sales by Category',
			'Total Sales by Product',
			'Total Sales by Order Status',
			'Products with Quantities by Order Status',
		];

		const chartData = {};
		for (const chartType of chartTypes) {
			const results = await sequelize.query(
				'CALL getChartData(:fromDate, :toDate, :orderStatus, :category, :product, :name, :phone, :chartType)',
				{
					replacements: {
						...this.prepareFilters(filters.filterState),
						chartType,
					},
				},
			);
			chartData[chartType.toLowerCase().replace(/\s+/g, '')] = results;
		}
		return chartData;
	}

	private async fetchOrders(filters: any): Promise<any[]> {
		const results = await sequelize.query(
			'CALL GetOrders(:fromDate, :toDate, :orderStatus, :category, :product, :name, :phone)',
			{
				replacements: this.prepareFilters(filters.filterState),
			},
		);
		// Group by orderId (same logic as frontend)
		const ordersMap: any = {};
		(results as any[]).forEach((row) => {
			if (!ordersMap[row.orderId]) {
				ordersMap[row.orderId] = { products: [], ...row };
			}
			ordersMap[row.orderId].products.push(row);
		});

		return Object.values(ordersMap);
	}

	private prepareFilters(filters: any) {
		const prepared = { ...filters };
		if (filters.fromDate) {
			prepared.fromDate = this.adjustDate(filters.fromDate, 'start');
		}
		if (filters.toDate) {
			prepared.toDate = this.adjustDate(filters.toDate, 'end');
		}
		return prepared;
	}

	private adjustDate(dateStr: string, type: 'start' | 'end'): string {
		const date = new Date(dateStr);
		if (type === 'start') {
			date.setHours(0, 0, 0, 0);
		} else {
			date.setHours(23, 59, 59, 999);
		}
		return date.toISOString().slice(0, 19).replace('T', ' ');
	}

	private formatDateMMddyyyy(dateInput: Date | string): string {
		const date = new Date(dateInput);
		const month = (date.getMonth() + 1).toString();
		const day = date.getDate().toString();
		const year = date.getFullYear().toString();
		return `${month.padStart(2, '0')}/${day.padStart(2, '0')}/${year}`;
	}

	private formatDateWithTime(dateInput: Date | string): string {
		const date = new Date(dateInput);
		const month = (date.getMonth() + 1).toString();
		const day = date.getDate().toString();
		const year = date.getFullYear().toString();
		const hours = date.getHours();
		const minutes = date.getMinutes().toString().padStart(2, '0');
		const seconds = date.getSeconds().toString().padStart(2, '0');
		const hour12 = hours % 12 || 12;
		const ampm = hours >= 12 ? 'PM' : 'AM';
		const datePart = `${month.padStart(2, '0')}/${day.padStart(2, '0')}/${year}`;
		const timePart = `${hour12.toString().padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
		return `${datePart} ${timePart}`;
	}

	private formatDateRange(filters: any): string {
		const { fromDate, toDate } = filters;
		if (fromDate && toDate) {
			return `${this.formatDateMMddyyyy(fromDate)} - ${this.formatDateMMddyyyy(toDate)}`;
		}
		return 'All Time';
	}
}
