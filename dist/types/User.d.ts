import { Role } from "./Role";
import { Document, Types } from "mongoose";
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
export declare const UserModel: import("mongoose").Model<UserDocument, {}, {}, {}, Document<unknown, {}, UserDocument, {}> & UserDocument & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
