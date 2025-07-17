import { MapShape } from "./MapStyle";

export interface MapArea {
  id: string;
  name: string;
}

export interface MapItem {
  id: string
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
}