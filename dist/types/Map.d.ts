import { MapShape } from "./MapStyle";
export interface MapArea {
    _id: string;
    name: string;
}
export interface MapItem {
    _id: string;
    area: string;
    shape: MapShape;
    label: string;
    people: string;
    x: number;
    y: number;
    object: boolean;
    width?: number;
    height?: number;
    color?: string;
    status?: string;
    order?: string;
}
export declare const MapAreaModel: import("mongoose").Model<MapArea, {}, {}, {}, import("mongoose").Document<unknown, {}, MapArea, {}> & MapArea & Required<{
    _id: string;
}> & {
    __v: number;
}, any>;
export declare const MapItemModel: import("mongoose").Model<MapItem, {}, {}, {}, import("mongoose").Document<unknown, {}, MapItem, {}> & MapItem & Required<{
    _id: string;
}> & {
    __v: number;
}, any>;
