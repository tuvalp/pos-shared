export const SHAPE_SIZE: Record<string, { w: number; h: number; r?: number }> = {
  "small-circle": { w: 32, h: 32, r: 9999 },
  "big-circle": { w: 56, h: 56, r: 9999 },
  "small-box": { w: 40, h: 32 },
  "big-box": { w: 72, h: 48 },
  "round-obj": { w: 48, h: 48, r: 12 },
  "box-obj": { w: 48, h: 48 },
};

export const STATE_COLOR: Record<string, string> = {
  open: "#e74c3c",
  served: "#f1c40f",
  paid: "#2ecc71",
  closed: "#95a5a6",
};

export const STATE_SHADOW: Record<string, string> = {
  open: "0 0 8px rgba(231, 76, 60, 0.5)",
  served: "0 0 8px rgba(241, 196, 15, 0.5)",
  paid: "0 0 8px rgba(46, 204, 113, 0.5)",
  closed: "0 0 8px rgba(149, 165, 166, 0.5)",
};