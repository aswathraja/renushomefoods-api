import { DataTypes, Model } from 'sequelize'
import { sequelize } from './db'

export class User extends Model {
    public id!: number
    public name!: string
    public username!: string
    public email!: string
    public phone!: string
    public password!: string
    public otp!: string
}

export type MailOptions = {
    to: string
    subject: string
    userFullName: string
    message: string
    logoUrl?: string // optional logo URL
}

User.init(
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
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        otp: {
            type: DataTypes.STRING(4),
            allowNull: true,
            validate: {
                is: /^\d{4}$/, // Regex to ensure only 4-digit numeric strings
            },
        },
    },
    {
        sequelize,
        tableName: 'users',
        timestamps: true, // helpful for tracking user creation and updates
    },
)

export class UserSession extends Model {
    public id!: number
    public userId!: number
    public token!: string
    public expiry!: Date
    public isExpired!: boolean
    public createdAt!: Date
    public updatedAt!: Date
}

UserSession.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: User,
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
        token: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        expiry: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: () => {
                const now = new Date()
                now.setDate(now.getDate() + 1) // 1 day later
                return now
            },
        },
        isExpired: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    },
    {
        sequelize,
        tableName: 'usersessions',
        timestamps: true,
    },
)

export class UserAddress extends Model {
    public id!: number
    public userId!: number
    public name!: string
    public addressLine1!: string
    public city!: string
    public state!: string
    public country!: string
    public pincode!: string
    public phone!: string
    public isDefault!: boolean
    public readonly createdAt!: Date
    public readonly updatedAt!: Date
    public readonly User!: User
}

UserAddress.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: User,
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        addressLine1: {
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
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pincode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isDefault: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    },
    {
        sequelize,
        tableName: 'useraddresses',
        timestamps: true,
    },
)

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
)

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
)

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
)

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
)

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
)

// Set up associations
Category.hasMany(Product, { foreignKey: 'categoryid' })
Product.belongsTo(Category, { foreignKey: 'categoryid' })
Product.hasMany(PriceList, { foreignKey: 'productid' })
PriceList.belongsTo(Product, { foreignKey: 'productid' })
Product.hasMany(ProductImage, { foreignKey: 'productId' })
ProductImage.belongsTo(Product, { foreignKey: 'productId' })

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
        userId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: User,
                key: 'id',
            },
            onDelete: 'CASCADE',
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
)

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
)

Cart.hasMany(CartProduct, { foreignKey: 'cartId' })
CartProduct.belongsTo(Cart, { foreignKey: 'cartId' })
Product.hasMany(CartProduct, { foreignKey: 'productId' })
CartProduct.belongsTo(Product, { foreignKey: 'productId' })
PriceList.hasMany(CartProduct, { foreignKey: 'priceListId' })
CartProduct.belongsTo(PriceList, { foreignKey: 'priceListId' })

// Order Model
export class Order extends Model {}

Order.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: User,
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
        userAddressId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: UserAddress,
                key: 'id',
            },
            onDelete: 'CASCADE',
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
        orderedDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        expectedDeliveryDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: () => {
                const now = new Date()
                now.setDate(now.getDate() + 10)
                return now
            },
        },
    },
    {
        sequelize,
        tableName: 'orders',
        timestamps: false,
    },
)

Order.belongsTo(Cart, { foreignKey: 'cartId' })
Order.belongsTo(UserAddress, { foreignKey: 'userAddressId' })

// USER ASSOCIATIONS
User.hasMany(Cart, { foreignKey: 'userId', as: 'carts' })
Cart.belongsTo(User, { foreignKey: 'userId', as: 'user' })

User.hasMany(Order, { foreignKey: 'userId', as: 'orders' })
Order.belongsTo(User, { foreignKey: 'userId', as: 'user' })

User.hasMany(UserAddress, { foreignKey: 'userId' })
UserAddress.belongsTo(User, { foreignKey: 'userId' })

UserAddress.hasMany(Order, { foreignKey: 'userAddressId' })

// Optional – if you want to link messages with users
User.hasMany(Message, { foreignKey: 'userId', as: 'messages' })
Message.belongsTo(User, { foreignKey: 'userId', as: 'user' })
