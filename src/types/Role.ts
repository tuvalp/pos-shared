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