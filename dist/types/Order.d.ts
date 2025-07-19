import { Types } from "mongoose";
export type OrderStatus = "open" | "served" | "paid" | "closed";
export type OrderItemNote = {
    note: string;
    idx?: number;
    price?: number;
};
export type OrderItemDiscount = {
    discount: number;
    discountType: string;
    idx?: number;
    requestId?: string;
    approvedId?: string;
};
export interface OrderItem {
    _id: string;
    product: Types.ObjectId | string;
    name: string;
    qty: number;
    price: number;
    total?: number;
    user: Types.ObjectId | string;
    note?: OrderItemNote[];
    discounts?: OrderItemDiscount[];
    createdAt: Date;
}
export interface Order {
    _id: string;
    user: Types.ObjectId | string;
    tableLabel: string;
    guests: number;
    status: OrderStatus;
    items: OrderItem[];
    total: number;
    createdAt: string;
    updatedAt: string;
    order?: string | null;
}
export declare const OrderModel: import("mongoose").Model<Order, {}, {}, {}, import("mongoose").Document<unknown, {}, Order, {}> & Order & Required<{
    _id: string;
}> & {
    __v: number;
}, any>;
