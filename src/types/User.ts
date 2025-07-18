import { Role } from "./Role";
import { Schema, model, Document, Types } from "mongoose";

export interface User {
  _id?: any; 
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
});

export const UserModel = model<UserDocument>("User", userSchema);
