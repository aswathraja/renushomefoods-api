import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../database/database'

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
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
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
        indexes: [
            {
                unique: true,
                fields: ['username'],
                name: 'users_username_unique',
            },
            {
                unique: true,
                fields: ['email'],
                name: 'users_email_unique',
            },
            {
                unique: true,
                fields: ['phone'],
                name: 'users_phone_unique',
            },
        ],
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
        },
        prevToken: {
            type: DataTypes.STRING,
            allowNull: false,
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
        indexes: [
            {
                unique: true,
                fields: ['token'],
                name: 'usersessions_token_unique',
            },
            {
                unique: true,
                fields: ['prevToken'],
                name: 'usersessions_prevToken_unique',
            },
        ],
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
        type: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'Product',
        },
        displayOrder: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: null,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        tableName: 'categories',
        timestamps: true,
    },
)

export class Location extends Model {}

Location.init(
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
        floor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        room: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rack: {
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
        photo: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        tableName: 'locations',
        timestamps: true,
    },
)

export class Product extends Model {
    public readonly createdAt!: Date
    public readonly updatedAt!: Date
}

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
        displayOrder: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        tableName: 'products',
        timestamps: true,
    },
)

export class PriceList extends Model {
    public readonly createdAt!: Date
    public readonly updatedAt!: Date
}

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
        basePrice: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        bomCost: {
            type: DataTypes.FLOAT,
            allowNull: true,
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
        quantity: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        tableName: 'pricelists',
        timestamps: true,
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
        displayOrder: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        tableName: 'productimages',
        timestamps: true,
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
        timestamps: true,
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
        timestamps: true,
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
        deliveryNote: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: '',
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
        timestamps: true,
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

// Role Model
export class Role extends Model {
    public id!: number
    public name!: string
}

Role.init(
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
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        tableName: 'roles',
        timestamps: true,
        indexes: [
            {
                unique: true,
                fields: ['name'],
                name: 'roles_name_unique',
            },
        ],
    },
)

// UserRole Model (junction table for many-to-many)
export class UserRole extends Model {
    public id!: number
    public userId!: number
    public roleId!: number
}

UserRole.init(
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
        roleId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: Role,
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        tableName: 'userroles',
        timestamps: true,
    },
)

// CouponCode Model
export class CouponCode extends Model {}

CouponCode.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        startDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        endDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        isGroupable: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        isForNewUsers: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        isForAllUsers: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    },
    {
        sequelize,
        tableName: 'couponcodes',
        timestamps: true,
    },
)

// CouponDiscounts Model
export class CouponDiscounts extends Model {
    public id!: number
    public name!: string
    public discount!: number
    public flatrate!: boolean
    public couponCodeId!: number
}

CouponDiscounts.init(
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
        discount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        flatrate: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        couponCodeId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: CouponCode,
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
    },
    {
        sequelize,
        tableName: 'coupondiscounts',
        timestamps: true,
    },
)

// CouponProducts Model
export class CouponProducts extends Model {}

CouponProducts.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        couponCodeId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: CouponCode,
                key: 'id',
            },
            onDelete: 'CASCADE',
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
    },
    {
        sequelize,
        tableName: 'couponproducts',
        timestamps: true,
    },
)

// OrderCoupon Model
export class OrderCoupon extends Model {}

OrderCoupon.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        couponCodeId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
            references: {
                model: CouponCode,
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
        orderId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: Order,
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
    },
    {
        sequelize,
        tableName: 'ordercoupons',
        timestamps: true,
    },
)

// CouponUsers Model (junction table for many-to-many between CouponCode and User)
export class CouponUsers extends Model {
    public id!: number
    public couponCodeId!: number
    public userId!: number
}

CouponUsers.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        couponCodeId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: CouponCode,
                key: 'id',
            },
            onDelete: 'CASCADE',
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
    },
    {
        sequelize,
        tableName: 'couponusers',
        timestamps: true,
    },
)

// Associations for Coupon models
CouponCode.hasMany(CouponDiscounts, { foreignKey: 'couponCodeId' })
CouponDiscounts.belongsTo(CouponCode, { foreignKey: 'couponCodeId' })

CouponCode.hasMany(CouponProducts, { foreignKey: 'couponCodeId' })
CouponProducts.belongsTo(CouponCode, { foreignKey: 'couponCodeId' })

CouponProducts.belongsTo(Product, { foreignKey: 'productId' })
Product.hasMany(CouponProducts, { foreignKey: 'productId' })

// Associations for OrderCoupon
Order.hasMany(OrderCoupon, { foreignKey: 'orderId' })
OrderCoupon.belongsTo(Order, { foreignKey: 'orderId' })

CouponCode.hasMany(OrderCoupon, { foreignKey: 'couponCodeId' })
OrderCoupon.belongsTo(CouponCode, { foreignKey: 'couponCodeId' })

// Many-to-many associations

// Many-to-many associations
User.belongsToMany(Role, {
    through: UserRole,
    foreignKey: 'userId',
    as: 'roles',
})
Role.belongsToMany(User, {
    through: UserRole,
    foreignKey: 'roleId',
    as: 'users',
})

// Many-to-many associations for CouponUsers
User.belongsToMany(CouponCode, {
    through: CouponUsers,
    foreignKey: 'userId',
    as: 'couponCodes',
})
CouponCode.belongsToMany(User, {
    through: CouponUsers,
    foreignKey: 'couponCodeId',
    as: 'users',
})

// AdCampaign Model
export class AdCampaign extends Model {
    public id!: number
    public name!: string
    public startDate!: Date
    public endDate!: Date
    public imagePath!: string | null
    public imageURL!: string | null
    public message!: string
    public subject!: string
}

AdCampaign.init(
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
        startDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        endDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        imagePath: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        imageURL: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'https://renushomefoods.com',
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        subject: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'adcampaigns',
        timestamps: true,
    },
)

// AdCampaignUsers Model (junction table for many-to-many between AdCampaign and User)
export class AdCampaignUsers extends Model {
    public id!: number
    public adCampaignId!: number
    public userId!: number
}

AdCampaignUsers.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        adCampaignId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: AdCampaign,
                key: 'id',
            },
            onDelete: 'CASCADE',
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
    },
    {
        sequelize,
        tableName: 'adcampaignusers',
        timestamps: true,
        indexes: [
            {
                unique: true,
                fields: ['adCampaignId', 'userId'],
                name: 'unique_adCampaign_user',
            },
        ],
    },
)

AdCampaign.belongsToMany(User, {
    through: AdCampaignUsers,
    foreignKey: 'adCampaignId',
    as: 'users',
})
User.belongsToMany(AdCampaign, {
    through: AdCampaignUsers,
    foreignKey: 'userId',
    as: 'adCampaigns',
})

AdCampaign.hasMany(AdCampaignUsers, {
    foreignKey: 'adCampaignId',
    as: 'adCampaignUsers',
})

AdCampaignUsers.belongsTo(User, { foreignKey: 'userId', as: 'user' })
AdCampaignUsers.belongsTo(AdCampaign, {
    foreignKey: 'adCampaignId',
    as: 'adCampaign',
})

User.hasMany(AdCampaignUsers, { foreignKey: 'userId', as: 'adCampaignUsers' })

// Item Model
export class Item extends Model {
    public id!: number
    public name!: string
    public description!: string
    public type!: string
    public categoryId?: number
    public readonly createdAt!: Date
    public readonly updatedAt!: Date
}

Item.init(
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
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        categoryId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
            references: {
                model: Category,
                key: 'id',
            },
            onDelete: 'SET NULL',
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        tableName: 'items',
        timestamps: true,
    },
)

// ItemInvoice Model
export class ItemInvoice extends Model {
    public id!: number
    public date!: Date
    public itemId!: number
    public price!: number
    public quantity!: number
}

ItemInvoice.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        itemId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: Item,
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
        weight: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        unitprice: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        basePrice: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'iteminvoices',
        timestamps: true,
    },
)

// ProductLocation Model (junction table for many-to-many between Product and Location)
export class ProductLocation extends Model {
    public id!: number
    public productId!: number
    public locationId!: number
    public quantity!: number
}

ProductLocation.init(
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
        locationId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: Location,
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
    },
    {
        sequelize,
        tableName: 'productlocations',
        timestamps: true,
    },
)

// ItemLocation Model (junction table for many-to-many between Item and Location)
export class ItemLocation extends Model {
    public id!: number
    public itemId!: number
    public locationId!: number
    public quantity!: number
}

ItemLocation.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        itemId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: Item,
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
        locationId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: Location,
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
    },
    {
        sequelize,
        tableName: 'itemlocations',
        timestamps: true,
    },
)

// ItemImage Model
export class ItemImage extends Model {
    public id!: number
    public itemId!: number
    public image!: string
    public description!: string
}

ItemImage.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        itemId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: Item,
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        displayOrder: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: 'itemimages',
        timestamps: true,
    },
)
// Associations for Product models
Product.belongsToMany(Location, {
    through: ProductLocation,
    foreignKey: 'productId',
    as: 'locations',
})
Location.belongsToMany(Product, {
    through: ProductLocation,
    foreignKey: 'locationId',
    as: 'products',
})

// Review Model
export class Review extends Model {
    public id!: number
    public name!: string
    public phone!: string
    public userId?: number
    public review!: string
    public rating?: number
    public photo?: string
    public location?: string
    public reviewDate?: Date
    public readonly createdAt!: Date
    public readonly updatedAt!: Date
}

Review.init(
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
        userId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
            references: {
                model: User,
                key: 'id',
            },
            onDelete: 'SET NULL',
        },
        rating: {
            type: DataTypes.DOUBLE,
            allowNull: true,
            defaultValue: null,
        },
        review: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        highlight: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        reviewDate: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null,
        },
    },
    {
        sequelize,
        tableName: 'reviews',
        timestamps: true,
    },
)

// ReviewProduct Model (junction table for many-to-many between Review and Product)
export class ReviewProduct extends Model {
    public id!: number
    public reviewId!: number
    public productId!: number
}

ReviewProduct.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        reviewId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: Review,
                key: 'id',
            },
            onDelete: 'CASCADE',
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
    },
    {
        sequelize,
        tableName: 'reviewproducts',
        timestamps: true,
    },
)

// Associations for Review models
Review.belongsToMany(Product, {
    through: ReviewProduct,
    foreignKey: 'reviewId',
    as: 'products',
})
Product.belongsToMany(Review, {
    through: ReviewProduct,
    foreignKey: 'productId',
    as: 'reviews',
})

Review.hasMany(ReviewProduct, { foreignKey: 'reviewId' })
ReviewProduct.belongsTo(Review, { foreignKey: 'reviewId' })

Product.hasMany(ReviewProduct, { foreignKey: 'productId' })
ReviewProduct.belongsTo(Product, { foreignKey: 'productId' })

// Associations for Item models
Item.hasMany(ItemInvoice, { foreignKey: 'itemId' })
ItemInvoice.belongsTo(Item, { foreignKey: 'itemId' })

Item.belongsTo(Category, { foreignKey: 'categoryId' })
Category.hasMany(Item, { foreignKey: 'categoryId' })

Item.hasMany(ItemImage, { foreignKey: 'itemId' })
ItemImage.belongsTo(Item, { foreignKey: 'itemId' })

Item.hasMany(ItemLocation, { foreignKey: 'itemId' })
ItemLocation.belongsTo(Item, { foreignKey: 'itemId' })
ItemLocation.belongsTo(Location, { foreignKey: 'locationId' })

Item.belongsToMany(Location, {
    through: ItemLocation,
    foreignKey: 'itemId',
    as: 'locations',
})
Location.belongsToMany(Item, {
    through: ItemLocation,
    foreignKey: 'locationId',
    as: 'items',
})
