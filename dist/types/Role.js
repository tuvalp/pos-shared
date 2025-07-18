"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleModel = exports.Permission = void 0;
const mongoose_1 = require("mongoose");
var Permission;
(function (Permission) {
    Permission["VIEW_ORDERS"] = "VIEW_ORDERS";
    Permission["EDIT_ORDERS"] = "EDIT_ORDERS";
    Permission["DELETE_ORDERS"] = "DELETE_ORDERS";
    Permission["MANAGE_USERS"] = "MANAGE_USERS";
    Permission["VIEW_REPORTS"] = "VIEW_REPORTS";
    Permission["MANAGE_MENU"] = "MANAGE_MENU";
})(Permission || (exports.Permission = Permission = {}));
const roleSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    permissions: [
        {
            type: String,
            enum: Object.values(Permission),
            required: true,
        },
    ],
});
exports.RoleModel = (0, mongoose_1.model)("Role", roleSchema);
