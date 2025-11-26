import { DataTypes, Model } from 'sequelize'
import { sequelize } from './database'

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
        prevToken: {
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
        basePrice: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        bomCost: {
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
            unique: true,
        },
    },
    {
        sequelize,
        tableName: 'roles',
        timestamps: false,
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
    },
    {
        sequelize,
        tableName: 'userroles',
        timestamps: false,
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
            unique: true,
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
