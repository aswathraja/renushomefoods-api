import { Injectable } from "@nestjs/common"
import { logger } from "../logger/logger"

export interface CartItem {
    weight: string
    quantity: number
}

export interface CouponDiscount {
    discount: number
    flatrate: boolean
}

@Injectable()
export class ShippingService {
    /**
     * Parse weight string to grams
     * Examples: "300g" -> 300, "1kg" -> 1000, "500g" -> 500
     */
    parseWeightToGrams(weightStr: string): number {
        if (!weightStr || weightStr === "") {
            return 0
        }

        const weightLower = weightStr.toLowerCase().trim()

        // Handle kg (e.g., "1kg", "1.5kg")
        if (weightLower.includes("kg")) {
            const value = parseFloat(weightLower.replace(/kg/g, "").trim())
            return Math.round(value * 1000)
        }

        // Handle g (e.g., "300g", "500g")
        if (weightLower.includes("g")) {
            const value = parseFloat(weightLower.replace(/g/g, "").trim())
            return Math.round(value)
        }

        // Default: assume grams if just a number
        const parsed = parseFloat(weightStr)
        return isNaN(parsed) ? 0 : Math.round(parsed)
    }

    /**
     * Calculate total weight of cart items in grams
     */
    calculateOrderWeight(cartItems: CartItem[]): number {
        if (!cartItems || cartItems.length === 0) {
            return 0
        }

        return cartItems.reduce((total, item) => {
            const weightInGrams = this.parseWeightToGrams(item.weight)
            return total + weightInGrams * item.quantity
        }, 0)
    }

    /**
     * Calculate shipping cost based on pincode and weight
     *
     * Chennai Local (600000-600300): <500g = ₹50, >=500g = ₹99
     * All Other: <500g = ₹149, >=500g = ₹199
     * Free Store Pickup: ₹0
     */
    calculateShippingCost(
        pincode: string,
        weightInGrams: number,
        shippingMethod: string,
    ): number {
        // Return 0 for Store Pickup
        if (shippingMethod !== "Home Delivery") {
            return 0
        }

        // Return 0 for empty pincode or weight
        if (!pincode || pincode === "" || weightInGrams === 0) {
            return 0
        }

        const pincodeNum = parseInt(pincode, 10)
        if (isNaN(pincodeNum)) {
            return 0
        }

        // Check if local zone (Chennai - 600000 to 600300)
        const isLocalZone = pincodeNum >= 600000 && pincodeNum <= 600300

        // Check if heavy (>= 500g)
        const isHeavy = weightInGrams >= 500

        // Calculate shipping cost
        if (isLocalZone) {
            return isHeavy ? 99 : 50
        } else {
            return isHeavy ? 199 : 149
        }
    }

    /**
     * Calculate shipping discount
     *
     * @param couponDiscount - The coupon discount object with discount value and flatrate flag
     * @param baseShippingCost - The base shipping cost before discount
     * @returns The discount amount to subtract from shipping
     */
    calculateShippingDiscount(
        couponDiscount: CouponDiscount | null | undefined,
        baseShippingCost: number,
    ): number {
        if (!couponDiscount) {
            return 0
        }
        if (baseShippingCost <= 0) {
            return 0
        }

        if (couponDiscount.flatrate) {
            // Flat rate discount: return the discount amount (capped to shipping cost)
            return Math.min(couponDiscount.discount, baseShippingCost)
        } else {
            // Percentage discount: calculate percentage of shipping cost
            const discountAmount =
                baseShippingCost * (couponDiscount.discount / 100)
            return Math.min(discountAmount, baseShippingCost)
        }
    }

    /**
     * Calculate final shipping cost after discount
     *
     * @param pincode - Delivery pincode
     * @param weightInGrams - Total weight in grams
     * @param shippingMethod - Shipping method ('Home Delivery' or 'Free Store Pickup')
     * @param couponDiscount - Optional coupon discount
     * @returns Final shipping cost after discount
     */
    calculateFinalShipping(
        pincode: string,
        weightInGrams: number,
        shippingMethod: string,
        couponDiscount?: CouponDiscount | null,
    ): number {
        // Get base shipping cost
        const baseCost = this.calculateShippingCost(
            pincode,
            weightInGrams,
            shippingMethod,
        )

        // If no coupon or no base cost, return base cost
        if (!couponDiscount || baseCost === 0) {
            return baseCost
        }

        // Calculate discount
        const discount = this.calculateShippingDiscount(
            couponDiscount,
            baseCost,
        )

        // Return final cost (never negative)
        return Math.max(0, baseCost - discount)
    }

    /**
     * Get shipping details for display
     */
    getShippingDetails(
        pincode: string,
        weightInGrams: number,
        shippingMethod: string,
        couponDiscount?: CouponDiscount | null,
    ): {
        baseCost: number
        discount: number
        finalCost: number
        isFree: boolean
        zone: string
        weightCategory: string
        message: string
    } {
        const baseCost = this.calculateShippingCost(
            pincode,
            weightInGrams,
            shippingMethod,
        )

        let discount = 0
        if (couponDiscount) {
            discount = this.calculateShippingDiscount(couponDiscount, baseCost)
        }

        const finalCost = Math.max(0, baseCost - discount)
        const isFree = finalCost === 0 && baseCost > 0

        // Determine zone
        const pincodeNum = parseInt(pincode, 10)
        let zone = "Other"
        if (
            !isNaN(pincodeNum) &&
            pincodeNum >= 600000 &&
            pincodeNum <= 600300
        ) {
            zone = "Chennai Local"
        }

        // Determine weight category
        const weightCategory =
            weightInGrams >= 500 ? "Heavy (≥500g)" : "Light (<500g)"

        // Generate message
        let message = ""
        if (shippingMethod !== "Home Delivery") {
            message = "Free Store Pickup"
        } else if (isFree) {
            message = "Free Shipping"
        } else {
            message = `Shipping: ₹${finalCost.toFixed(2)}`
        }

        return {
            baseCost,
            discount,
            finalCost,
            isFree,
            zone,
            weightCategory,
            message,
        }
    }

    /**
     * Log shipping calculation for debugging
     */
    logShippingCalculation(
        pincode: string,
        weightInGrams: number,
        shippingMethod: string,
        couponDiscount?: CouponDiscount | null,
    ): void {
        const details = this.getShippingDetails(
            pincode,
            weightInGrams,
            shippingMethod,
            couponDiscount,
        )
        logger.info(
            `Shipping Calculation: Pincode=${pincode}, Weight=${weightInGrams}g, Method=${shippingMethod}`,
        )
        logger.info(
            `  Zone: ${details.zone}, Weight Category: ${details.weightCategory}`,
        )
        logger.info(
            `  Base Cost: ₹${details.baseCost}, Discount: ₹${details.discount}, Final: ₹${details.finalCost}`,
        )
    }
}
