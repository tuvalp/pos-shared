import { Schema, model, Document, Types } from "mongoose";
import { Role } from "./Role";

export interface User {
  _id?: string
  username: string;
  password: string;
  role: Role;
  color: string;
}

export type UserDoc = User;


const userSchema = new Schema<UserDoc>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: Schema.Types.ObjectId, ref: "Role", required: true },
  color: { type: String },
}, { timestamps: true });


export const UserModel = model<UserDoc>("User", userSchema);
