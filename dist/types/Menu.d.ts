import { Types } from "mongoose";
export interface ProductOption {
    name: string;
    price?: number;
}
export interface Category {
    _id: Types.ObjectId;
    name: string;
    icon?: string;
}
export interface SubCategory {
    _id: Types.ObjectId;
    name: string;
    icon?: string;
    category: Types.ObjectId;
}
export interface Product {
    _id: Types.ObjectId;
    name: string;
    price: number;
    category: Types.ObjectId;
    subcategory: Types.ObjectId;
    description?: string;
    options?: [ProductOption];
    image?: string;
    isAvailable: boolean;
}
export declare const SubCategory: import("mongoose").Model<SubCategory, {}, {}, {}, import("mongoose").Document<unknown, {}, SubCategory, {}> & SubCategory & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
export declare const Category: import("mongoose").Model<Category, {}, {}, {}, import("mongoose").Document<unknown, {}, Category, {}> & Category & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
export declare const Product: import("mongoose").Model<Product, {}, {}, {}, import("mongoose").Document<unknown, {}, Product, {}> & Product & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
