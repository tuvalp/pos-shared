import { Schema, model, Document, Types } from "mongoose";
import { Role } from "./Role";

export interface User {
  _id?: Types.ObjectId;
  username: string;
  password: string;
  role: Role;
  color: string;
}

export interface UserDocument extends User, Document {
  _id: Types.ObjectId;
}

const userSchema = new Schema<UserDocument>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: Schema.Types.ObjectId, ref: "Role", required: true },
  color: { type: String },
}, { timestamps: true });


export const UserModel = model<UserDocument>("User", userSchema);
