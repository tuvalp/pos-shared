import { Role } from "./Role";
import { Schema, model, Document } from "mongoose";

export interface User {
    username: string;
    password: string;
    role: Role;
    color: string;
}


interface UserDocument extends User, Document {}

const userSchema = new Schema<UserDocument>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: Schema.Types.ObjectId, ref: "Role", required: true },
  color: { type: String }
});

export const UserModel = model<UserDocument>("User", userSchema);
