"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapItemModel = exports.MapAreaModel = void 0;
const mongoose_1 = require("mongoose");
const areaSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
}, { timestamps: true });
const itemSchema = new mongoose_1.Schema({
    area: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "MapArea",
        required: true,
    },
    shape: { type: String, required: true },
    label: { type: String, required: true },
    people: { type: String, required: true },
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    object: { type: Boolean, required: false },
    width: Number,
    height: Number,
    color: String,
}, { timestamps: true });
exports.MapAreaModel = (0, mongoose_1.model)("MapArea", areaSchema);
exports.MapItemModel = (0, mongoose_1.model)("MapItem", itemSchema);
