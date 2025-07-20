"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.Category = exports.SubCategory = void 0;
const mongoose_1 = require("mongoose");
const productOptionSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: false },
});
const categorySchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: false },
    icon: { type: String, required: false }
});
const subSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    icon: { type: String, required: false },
    category: { type: mongoose_1.Schema.Types.ObjectId, ref: "Category", required: true }
});
subSchema.index({ name: 1, category: 1 }, { unique: true });
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: mongoose_1.Schema.Types.ObjectId, ref: "Category", required: false },
    subcategory: { type: mongoose_1.Schema.Types.ObjectId, ref: "SubCategory", required: false },
    description: String,
    options: { type: [productOptionSchema], default: [] },
    image: String,
    isAvailable: { type: Boolean, default: true }
});
productSchema.index({ name: 1, subcategory: 1 }, { unique: true });
exports.SubCategory = (0, mongoose_1.model)("SubCategory", subSchema);
exports.Category = (0, mongoose_1.model)("Category", categorySchema);
exports.Product = (0, mongoose_1.model)("Product", productSchema);
