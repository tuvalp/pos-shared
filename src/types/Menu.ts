import { Schema, model, Types } from "mongoose";

export interface ProductOption {
  name: string;
  price?: number;
}

const productOptionSchema = new Schema<ProductOption>({
  name: { type: String, required: true },
  price: { type: Number, required: false },
})


export interface Category {
    _id: Types.ObjectId;
    name: string;
    icon?: string;
  }
  const categorySchema = new Schema<Category>({
    name: { type: String, required: true, unique: false },
    icon: { type: String, required: false }
  });
  
  export interface SubCategory {
      _id: Types.ObjectId;
      name: string;
    icon?: string;
    category: Types.ObjectId;
}
const subSchema = new Schema<SubCategory>({
    name: { type: String, required: true },
    icon: { type: String, required: false },
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true }
});
subSchema.index({ name: 1, category: 1 }, { unique: true });

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
const productSchema = new Schema<Product>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category", required: false },
    subcategory: { type: Schema.Types.ObjectId, ref: "SubCategory", required: false },
    description: String,
    options: {type: [productOptionSchema], default: []},
    image: String,
    isAvailable: { type: Boolean, default: true }
});
productSchema.index({ name: 1, subcategory: 1 }, { unique: true });


export const SubCategory = model<SubCategory>("SubCategory", subSchema);
export const Category = model<Category>("Category", categorySchema);
export const Product = model<Product>("Product", productSchema);