import { Schema, model } from "mongoose";

export enum Permission {
  VIEW_ORDERS = "VIEW_ORDERS",
  EDIT_ORDERS = "EDIT_ORDERS",
  DELETE_ORDERS = "DELETE_ORDERS",
  MANAGE_USERS = "MANAGE_USERS",
  VIEW_REPORTS = "VIEW_REPORTS",
  MANAGE_MENU = "MANAGE_MENU",
}


export interface Role {
    name: string;
    permissions: Permission[];
}

const roleSchema = new Schema<Role>({
  name: { type: String, required: true },
  permissions: [
    {
      type: String,
      enum: Object.values(Permission), 
      required: true,
    },
  ],
});

export const RoleModel = model<Role>("Role", roleSchema);