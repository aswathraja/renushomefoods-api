import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common'
import { join } from 'path'
import { AppService } from './app.service'
import { Category, Message, PriceList, Product, ProductImage } from './models'

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(@Body() body: any, @Query() query: any, @Res() res): any {
        // Serve the React build index.html file
        res.sendFile(join(__dirname, 'web', 'index.html'))
    }

    @Post('get-pricelists-by-product')
    async getPriceListsByProduct(@Body() body: { category?: string }) {
        try {
            const whereClause: any = {}
            if (
                body?.category &&
                body?.category !== 'All Products' &&
                Boolean(body?.category) === true
            ) {
                // Find category by name
                const categoryObj = await Category.findOne({
                    where: { category: body.category },
                })
                if (categoryObj) {
                    whereClause.categoryid = categoryObj.getDataValue('id')
                } else {
                    return []
                }
            }
            const products = await Product.findAll({
                where: whereClause,
                include: [
                    { model: PriceList },
                    { model: Category },
                    { model: ProductImage, order: [['rank', 'ASC']] },
                ],
                order: [['rank', 'ASC']],
            })
            return products
        } catch (error) {
            console.error('Error in getPriceListsByProduct:', error)
            return { error: 'Failed to fetch price lists' }
        }
    }
    @Get('categories')
    async getCategories() {
        try {
            const categories = await Category.findAll({
                order: [['rank', 'ASC']],
            })
            return categories
        } catch (error) {
            return { error: 'Failed to fetch categories' }
        }
    }

    @Post('categories')
    async createOrUpdateCategory(@Body() body: any) {
        try {
            const { id, category, rank, image } = body as {
                id?: number
                category: string
                rank?: number
                image?: string
            }
            if (!category) {
                return { error: 'Category name required' }
            }
            let cat
            if (id) {
                cat = await Category.findByPk(id)
                if (!cat) {
                    return { error: 'Category not found' }
                }
                await cat.update({ category, rank, image })
            } else {
                cat = await Category.create({ category, rank, image })
            }
            return cat
        } catch (error) {
            return { error: 'Failed to create or update category' }
        }
    }

    @Post('product-with-pricelists')
    async createOrUpdateProductWithPriceLists(@Body() body: any) {
        try {
            const {
                id,
                name,
                categoryid,
                pricelists,
                productimages,
                tagline,
                rank,
            } = body
            if (!name || !categoryid || !Array.isArray(pricelists)) {
                return { error: 'Invalid input' }
            }
            let product
            if (id) {
                product = await Product.findByPk(id)
                if (!product) {
                    return { error: 'Product not found' }
                }
                await product.update({ name, categoryid, tagline, rank })
            } else {
                product = await Product.create({
                    name,
                    categoryid,
                    tagline,
                    rank,
                })
            }
            // Handle pricelists
            for (const pl of pricelists) {
                if (pl.id) {
                    const existingPL = await PriceList.findByPk(pl.id)
                    if (existingPL) {
                        await existingPL.update({
                            weight: pl.weight,
                            unitprice: pl.unitprice,
                        })
                    }
                } else {
                    await PriceList.create({
                        weight: pl.weight,
                        unitprice: pl.unitprice,
                        productid: product.id,
                    })
                }
            }
            // Handle product images
            if (Array.isArray(productimages)) {
                for (const img of productimages) {
                    if (img.id) {
                        const existingImg = await ProductImage.findByPk(img.id)
                        if (existingImg) {
                            await existingImg.update({
                                fileName: img.fileName,
                                rank: img.rank,
                                type: img.type,
                            })
                        }
                    } else {
                        await ProductImage.create({
                            fileName: img.fileName,
                            productId: product.id,
                            rank: img.rank,
                            type: img.type,
                        })
                    }
                }
            }
            const result = await Product.findOne({
                where: { id: product.id },
                include: [
                    { model: PriceList },
                    { model: Category },
                    { model: ProductImage, order: [['rank', 'ASC']] },
                ],
            })
            return result
        } catch (error) {
            return {
                error: 'Failed to create or update product with pricelists and images',
            }
        }
    }

    @Post('message')
    async createMessage(
        @Body()
        body: {
            name: string
            phone: string
            email: string
            message: string
        },
    ) {
        try {
            if (!body.name || !body.phone || !body.message) {
                return { error: 'Name, Phone, Message fields are required.' }
            }
            const msg = await Message.create({
                name: body.name,
                phone: body.phone,
                email: body.email,
                message: body.message,
            })
            return msg
        } catch (error) {
            return { error: 'Failed to create message.' }
        }
    }
}
