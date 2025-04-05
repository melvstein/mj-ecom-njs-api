import { TProduct } from "@/types/TModels";
import { Schema, models, model } from "mongoose";

const ProductSchema = new Schema<TProduct>({
    sku: {
        type: String,
        required: true,
        unique: true
    },
    tags: {
        type: [String],
        required: true
    },
    name: {
        type: String
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,
        default: "local"
    },
    images: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

ProductSchema.pre("save", function(next) {
    if (this.isModified("updatedAt") || this.isNew) {
        this.updatedAt = new Date();
    }

    next();
});

const Product = models.Product || model("Product", ProductSchema);

export default Product;