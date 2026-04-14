import { Injectable, Logger } from "@nestjs/common"
import * as fs from "fs"
import * as handlebars from "handlebars"
import * as path from "path"
import * as puppeteer from "puppeteer"
import { sequelize } from "../database/db"

@Injectable()
export class AdminDashboardPdfService {
    private readonly logger = new Logger(AdminDashboardPdfService.name)
    private readonly templatePath = path.join(
        __dirname,
        "..",
        "templates",
        "admin-dashboard-pdf.html",
    )

    private async _generateDashboardPdf(
        filters: any,
        format: "pdf" | "png",
    ): Promise<Buffer | Uint8Array> {
        const browser = await puppeteer.launch({
            headless: true,
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
        })

        try {
            const page = await browser.newPage()

            // Fetch data using same logic as frontend hooks
            const kpis = await this.fetchKpis(filters)
            const chartData = await this.fetchChartData(filters)
            const orders = await this.fetchOrders(filters)

            // Compile template
            const template = handlebars.compile(
                fs.readFileSync(this.templatePath, "utf8"),
            )
            const html = template({
                dateRange: this.formatDateRange(filters),
                generatedAt: new Date().toLocaleString(),
                kpis,
                chartData,
                orders: orders.slice(0, 20), // Limit orders for PDF
                orderCount: orders.length,
            })

            await page.setContent(html, { waitUntil: "networkidle0" })

            const buffer =
                format === "pdf"
                    ? await page.pdf({
                          format: "A4",
                          printBackground: true,
                          margin: {
                              top: "20px",
                              bottom: "20px",
                              left: "20px",
                              right: "20px",
                          },
                      })
                    : await page.screenshot({
                          type: "png" as const,
                          fullPage: true,
                          omitBackground: false,
                      })

            return buffer
        } finally {
            await browser.close()
        }
    }

    async generateDashboardPdf(
        filters: any,
        format: "pdf" | "png",
    ): Promise<Buffer> {
        const rawBuffer = await this._generateDashboardPdf(filters, format)
        return Buffer.from(rawBuffer)
    }

    private async fetchKpis(filters: any): Promise<any> {
        const [results] = await sequelize.query(
            "CALL GetDashboardKPIs(:fromDate, :toDate, :orderStatus, :category, :product, :name, :phone)",
            {
                replacements: this.prepareFilters(filters),
            },
        )
        return results[0]
    }

    private async fetchChartData(filters: any): Promise<any> {
        const chartTypes = [
            "Total Sales by Category",
            "Total Sales by Product",
            "Total Sales by Order Status",
            "Products with Quantities by Order Status",
        ]

        const chartData = {}
        for (const chartType of chartTypes) {
            const [results] = await sequelize.query(
                "CALL getChartData(:fromDate, :toDate, :orderStatus, :category, :product, :name, :phone, :chartType)",
                {
                    replacements: {
                        ...this.prepareFilters(filters),
                        chartType,
                    },
                },
            )
            chartData[chartType.toLowerCase().replace(/\s+/g, "")] = results
        }
        return chartData
    }

    private async fetchOrders(filters: any): Promise<any[]> {
        const [results] = await sequelize.query(
            "CALL GetOrders(:fromDate, :toDate, :orderStatus, :category, :product, :name, :phone)",
            {
                replacements: this.prepareFilters(filters),
            },
        )

        // Group by orderId (same logic as frontend)
        const ordersMap: any = {}
        ;(results as any[]).forEach((row) => {
            if (!ordersMap[row.orderId]) {
                ordersMap[row.orderId] = { products: [], ...row }
            }
            ordersMap[row.orderId].products.push(row)
        })

        return Object.values(ordersMap)
    }

    private prepareFilters(filters: any) {
        const prepared = { ...filters }
        if (filters.fromDate) {
            prepared.fromDate = this.adjustDate(filters.fromDate, "start")
        }
        if (filters.toDate) {
            prepared.toDate = this.adjustDate(filters.toDate, "end")
        }
        return prepared
    }

    private adjustDate(dateStr: string, type: "start" | "end"): string {
        const date = new Date(dateStr)
        if (type === "start") {
            date.setHours(0, 0, 0, 0)
        } else {
            date.setHours(23, 59, 59, 999)
        }
        return date.toISOString().slice(0, 19).replace("T", " ")
    }

    private formatDateRange(filters: any): string {
        const { fromDate, toDate } = filters
        if (fromDate && toDate) {
            return `${new Date(fromDate).toLocaleDateString()} - ${new Date(toDate).toLocaleDateString()}`
        }
        return "All Time"
    }
}
