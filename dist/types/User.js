"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: mongoose_1.Schema.Types.ObjectId, ref: "Role", required: true },
    color: { type: String },
}, { timestamps: true });
exports.UserModel = (0, mongoose_1.model)("User", userSchema);
