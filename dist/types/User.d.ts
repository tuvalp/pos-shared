import { Document, Types } from "mongoose";
import { Role } from "./Role";
export interface User {
    id?: Types.ObjectId;
    username: string;
    password: string;
    role: Role;
    color: string;
}
export interface UserDocument extends User, Document {
    id: Types.ObjectId;
}
export declare const UserModel: import("mongoose").Model<UserDocument, {}, {}, {}, Document<unknown, {}, UserDocument, {}> & UserDocument & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
