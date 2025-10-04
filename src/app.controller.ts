import { Controller, Get, Post, Body, Query, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Product, PriceList, Category, ProductImage, Cart, CartProduct, Order, Message } from './models';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Body() body: any, @Query() query: any, @Res() res): any {
    // Serve the React build index.html file
    res.sendFile(join(__dirname, 'web', 'index.html'));
  }

  @Post('get-pricelists-by-product')
  async getPriceListsByProduct(@Body() body: { category?: string }) {
    try {
      const whereClause: any = {};
      if (body?.category && body?.category !== 'All Products' && Boolean(body?.category) === true) {
        // Find category by name
        const categoryObj = await Category.findOne({ where: { category: body.category } });
        if (categoryObj) {
          whereClause.categoryid = categoryObj.getDataValue('id');
        } else {
          return [];
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
      });
      return products;
    } catch (error) {
      console.error('Error in getPriceListsByProduct:', error);
      return { error: 'Failed to fetch price lists' };
    }
  }
  @Get('categories')
  async getCategories() {
    try {
      const categories = await Category.findAll({ order: [['rank', 'ASC']] });
      return categories;
    } catch (error) {
      return { error: 'Failed to fetch categories' };
    }
  }

  @Post('categories')
  async createOrUpdateCategory(@Body() body: any) {
    try {
      const { id, category, rank, image } = body as { id?: number; category: string; rank?: number; image?: string };
      if (!category) {
        return { error: 'Category name required' };
      }
      let cat;
      if (id) {
        cat = await Category.findByPk(id);
        if (!cat) {
          return { error: 'Category not found' };
        }
        await cat.update({ category, rank, image });
      } else {
        cat = await Category.create({ category, rank, image });
      }
      return cat;
    } catch (error) {
      return { error: 'Failed to create or update category' };
    }
  }

  @Post('product-with-pricelists')
  async createOrUpdateProductWithPriceLists(@Body() body: any) {
    try {
      const { id, name, categoryid, pricelists, productimages, tagline, rank } = body;
      if (!name || !categoryid || !Array.isArray(pricelists)) {
        return { error: 'Invalid input' };
      }
      let product;
      if (id) {
        product = await Product.findByPk(id);
        if (!product) {
          return { error: 'Product not found' };
        }
        await product.update({ name, categoryid, tagline, rank });
      } else {
        product = await Product.create({ name, categoryid, tagline, rank });
      }
      // Handle pricelists
      for (const pl of pricelists) {
        if (pl.id) {
          const existingPL = await PriceList.findByPk(pl.id);
          if (existingPL) {
            await existingPL.update({ weight: pl.weight, unitprice: pl.unitprice });
          }
        } else {
          await PriceList.create({ weight: pl.weight, unitprice: pl.unitprice, productid: product.id });
        }
      }
      // Handle product images
      if (Array.isArray(productimages)) {
        for (const img of productimages) {
          if (img.id) {
            const existingImg = await ProductImage.findByPk(img.id);
            if (existingImg) {
              await existingImg.update({ fileName: img.fileName, rank: img.rank, type: img.type });
            }
          } else {
            await ProductImage.create({ fileName: img.fileName, productId: product.id, rank: img.rank, type: img.type });
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
      });
      return result;
    } catch (error) {
      return { error: 'Failed to create or update product with pricelists and images' };
    }
  }

  @Post('cart')
  async saveOrUpdateCart(@Body() body: any) {
    try {
      const {
        id,
        products,
        createdBy,
        updatedBy,
        status
      } = body;
      const productsArray = Array.isArray(products) ? products : [];
      let cart;
      if (id) {
        cart = await Cart.findByPk(id);
        if (!cart) {
          return { error: 'Cart not found' };
        }
        const updatedProdcts = [];
        await cart.update({
          updatedBy,
          updatedAt: new Date(),
          status: status || 'Created'
        });
        // Update CartProducts
        for (const prod of productsArray) {
          const [cartProduct, created] = await CartProduct.findOrCreate({
            where: {
              cartId: cart.id,
              productId: prod.productId,
              priceListId: prod.priceList.id,
            },
            defaults: {
              quantity: prod.quantity,
            },
          });
          if (!created) {
            await cartProduct.update({ quantity: prod.quantity });
            updatedProdcts.push(cartProduct);
          }
        }
      } else {
        cart = await Cart.create({
          createdBy,
          updatedBy: createdBy,
          createdAt: new Date(),
          updatedAt: new Date(),
          status: 'Created',
        });
        const createdProdcts = [];
        // Create CartProducts
        for (const prod of productsArray) {
          const createdProduct = await CartProduct.create({
            cartId: cart.id,
            productId: prod.productId,
            priceListId: prod.priceList.id,
            quantity: prod.quantity,
          });
          createdProdcts.push(createdProduct);
        }
      }
      
      return cart;
    } catch (error) {
      console.error('Error in saveOrUpdateCart:', error);
      return { error: 'Failed to save or update cart' };
    }
  }

  @Get('cart')
  async getCartByCreatedBy(@Query('name') name: string) {
    try {
      if (!name) {
        return { error: 'Name is required' };
      }
      const carts = await Cart.findAll({
        where: {
          createdBy: name,
          status: 'Created',
        },
        include: [Product, PriceList],
      });
      return carts;
    } catch (error) {
      return { error: 'Failed to fetch cart' };
    }
  }

    @Post('order')
    async saveOrUpdateOrder(@Body() body: any) {
      try {
        const {
          id,
          name,
          address,
          city,
          state,
          pincode,
          mobile,
          email,
          notes,
          shippingMethod,
          paymentMethod,
          cartId,
          status,
        } = body;
        let order;
        if (id) {
          order = await Order.findByPk(id);
          if (!order) {
            return { error: 'Order not found' };
          }
          await order.update({
            name,
            address,
            city,
            state,
            pincode,
            mobile,
            email,
            notes,
            shippingMethod,
            paymentMethod,
            cartId,
            status: status || 'Ordered',
          });
        } else {
          order = await Order.create({
            name,
            address,
            city,
            state,
            pincode,
            mobile,
            email,
            notes,
            shippingMethod,
            paymentMethod,
            cartId,
            status: status || 'Ordered',
          });
        }
        return order;
      } catch (error) {
        return { error: 'Failed to save or update order' };
      }
    }

    @Get('order')
    async getOrderById(@Query('id') id: string) {
      try {
        if (!id) {
          return { error: 'Order id is required' };
        }
        const order = await Order.findByPk(id, { include: [Cart] });
        if (!order) {
          return { error: 'Order not found' };
        }
        return order;
      } catch (error) {
        return { error: 'Failed to fetch order' };
      }
    }

    @Post('message')
    async createMessage(@Body() body: { name: string; phone: string; email: string; message: string }) {
      try {
        if (!body.name || !body.phone || !body.message) {
          return { error: 'Name, Phone, Message fields are required.' };
        }
        const msg = await Message.create({
          name: body.name,
          phone: body.phone,
          email: body.email,
          message: body.message,
        });
        return msg;
      } catch (error) {
        return { error: 'Failed to create message.' };
      }
    }
}
