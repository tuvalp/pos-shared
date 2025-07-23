"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = require("mongoose");
const Menu_1 = require("./Menu");
/* ──────── Schemas ──────── */
const NoteSchema = new mongoose_1.Schema({
    note: { type: String, required: true },
    idx: { type: Number },
    price: { type: Number },
});
const DiscountSchema = new mongoose_1.Schema({
    discount: { type: Number, required: true },
    discountType: { type: String, required: true },
    idx: { type: Number },
    requestId: { type: String },
    approvedId: { type: String },
});
const OrderItemSchema = new mongoose_1.Schema({
    product: { type: Menu_1.Product, required: true },
    qty: { type: Number, required: true },
    total: { type: Number },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    note: { type: [NoteSchema], default: [] },
    discounts: { type: [DiscountSchema], default: [] },
    createdAt: { type: Date, default: Date.now },
});
const OrderSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    tableLabel: { type: String, required: true },
    status: {
        type: String,
        enum: ["open", "served", "paid", "closed"],
        default: "open",
    },
    guests: { type: Number, default: 1 },
    items: { type: [OrderItemSchema], default: [] },
    total: { type: Number, default: 0 },
}, { timestamps: true });
/* ──────── Model ──────── */
exports.OrderModel = (0, mongoose_1.model)("Order", OrderSchema);
