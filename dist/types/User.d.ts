import { Role } from "./Role";
import { Document } from "mongoose";
export interface User {
    username: string;
    password: string;
    role: Role;
    color: string;
}
interface UserDocument extends User, Document {
}
export declare const UserModel: import("mongoose").Model<UserDocument, {}, {}, {}, Document<unknown, {}, UserDocument, {}> & UserDocument & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export {};
