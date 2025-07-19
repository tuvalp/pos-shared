import { Schema, model, Types } from "mongoose";

/* ──────── Types ──────── */

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

type OrderDoc = Order;

/* ──────── Schemas ──────── */

const NoteSchema = new Schema<OrderItemNote>({
  note: { type: String, required: true },
  idx: { type: Number },
  price: { type: Number },
});

const DiscountSchema = new Schema<OrderItemDiscount>({
  discount: { type: Number, required: true },
  discountType: { type: String, required: true },
  idx: { type: Number },
  requestId: { type: String },
  approvedId: { type: String },
});

const OrderItemSchema = new Schema<OrderItem>({
  product: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  price: { type: Number, required: true },
  total: { type: Number },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  note: { type: [NoteSchema], default: [] },
  discounts: { type: [DiscountSchema], default: [] },
  createdAt: { type: Date, default: Date.now },
});

const OrderSchema = new Schema<OrderDoc>(
  {
    user: { type: Schema.Types.ObjectId , ref: "User", required: true },
    tableLabel: { type: String, required: true },
    status: {
      type: String,
      enum: ["open", "served", "paid", "closed"],
      default: "open",
    },
    guests: { type: Number, default: 1 },
    items: { type: [OrderItemSchema], default: [] },
    total: { type: Number, default: 0 },
  },
  { timestamps: true }
);

/* ──────── Model ──────── */

export const OrderModel = model<OrderDoc>("Order", OrderSchema);
