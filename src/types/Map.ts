import  { Schema, model } from "mongoose";
import { MapShape } from "./MapStyle";

export interface MapArea {
  _id: string;
  name: string;
}

export interface MapItem {
  _id: string
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
  status?: string
  order?: string
}


const areaSchema = new Schema<MapArea>(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);


const itemSchema = new Schema<MapItem>(
  {
    area: {
      type: Schema.Types.ObjectId as any,
      ref: "MapArea",
      required: true,
    },
    shape: { type: String, required: true },
    label: { type: String, required: true },
    people: { type: String, required: true },
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    object: { type: Boolean, required: false },
    width: Number,
    height: Number,
    color: String,
    status: String
  },
  { timestamps: true }
);


export const MapAreaModel = model<MapArea>("MapArea", areaSchema);
export const MapItemModel = model<MapItem>("MapItem", itemSchema);
