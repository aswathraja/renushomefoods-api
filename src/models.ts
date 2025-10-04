
import { DataTypes, Model } from 'sequelize';
import { sequelize } from './db';

// Message Model
export class Message extends Model {}

Message.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'messages',
    timestamps: true,
  },
);

export class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    sequelize,
    tableName: 'categories',
    timestamps: false,
  },
);

export class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tagline: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    categoryid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: Category,
        key: 'id',
      },
      onDelete: 'SET NULL',
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    sequelize,
    tableName: 'products',
    timestamps: false,
  },
);

export class PriceList extends Model {}

PriceList.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unitprice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    productid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: Product,
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
  },
  {
    sequelize,
    tableName: 'pricelists',
    timestamps: false,
  },
);

export class ProductImage extends Model {}

ProductImage.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    fileName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: Product,
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    sequelize,
    tableName: 'productimages',
    timestamps: false,
  },
);

// Set up associations
Category.hasMany(Product, { foreignKey: 'categoryid' });
Product.belongsTo(Category, { foreignKey: 'categoryid' });
Product.hasMany(PriceList, { foreignKey: 'productid' });
PriceList.belongsTo(Product, { foreignKey: 'productid' });
Product.hasMany(ProductImage, { foreignKey: 'productId' });
ProductImage.belongsTo(Product, { foreignKey: 'productId' });

// Cart Model
export class Cart extends Model {}

Cart.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    createdBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Created',
    },
  },
  {
    sequelize,
    tableName: 'carts',
    timestamps: false,
  },
);

// CartProduct Model
export class CartProduct extends Model {}

CartProduct.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: Product,
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    priceListId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: PriceList,
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    cartId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: Cart,
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    quantity: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'cartproducts',
    timestamps: false,
  },
);

Cart.hasMany(CartProduct, { foreignKey: 'cartId' });
CartProduct.belongsTo(Cart, { foreignKey: 'cartId' });
Product.hasMany(CartProduct, { foreignKey: 'productId' });
CartProduct.belongsTo(Product, { foreignKey: 'productId' });
PriceList.hasMany(CartProduct, { foreignKey: 'priceListId' });
CartProduct.belongsTo(PriceList, { foreignKey: 'priceListId' });

// Order Model
export class Order extends Model {}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pincode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    shippingMethod: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    paymentMethod: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cartId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: Cart,
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Ordered',
    },
  },
  {
    sequelize,
    tableName: 'orders',
    timestamps: false,
  },
);

Order.belongsTo(Cart, { foreignKey: 'cartId' });
