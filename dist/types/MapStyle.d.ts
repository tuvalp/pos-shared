export type MapShape = "small-circle" | "big-circle" | "small-box" | "big-box" | "round-obj" | "box-obj";
export declare const SHAPE_SIZE: Record<string, {
    w: number;
    h: number;
    r?: number;
}>;
export declare const STATE_COLOR: Record<string, string>;
export declare const STATE_SHADOW: Record<string, string>;
