import { Document } from "mongoose";
import { Role } from "./Role";
export interface User {
    _id?: string;
    username: string;
    password: string;
    role: Role;
    color: string;
}
export type UserDoc = User;
export declare const UserModel: import("mongoose").Model<User, {}, {}, {}, Document<unknown, {}, User, {}> & User & Required<{
    _id: string;
}> & {
    __v: number;
}, any>;
