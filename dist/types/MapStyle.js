"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATE_SHADOW = exports.STATE_COLOR = exports.SHAPE_SIZE = void 0;
exports.SHAPE_SIZE = {
    "small-circle": { w: 32, h: 32, r: 9999 },
    "big-circle": { w: 56, h: 56, r: 9999 },
    "small-box": { w: 40, h: 32 },
    "big-box": { w: 72, h: 48 },
    "round-obj": { w: 48, h: 48, r: 12 },
    "box-obj": { w: 48, h: 48 },
};
exports.STATE_COLOR = {
    open: "#f1c40f",
    served: "#2ecc71",
    billed: "#e74c3c",
    paid: "#88c0d0",
    closed: "#95a5a6",
};
exports.STATE_SHADOW = {
    open: "0 0 8px rgba(241, 196, 15, 0.5)",
    served: "0 0 8px rgba(46, 204, 113, 0.5)",
    billed: "0 0 8px rgba(231, 76, 60, 0.5)",
    paid: "0 0 8px rgba(136, 192, 208, 0.5)",
    closed: "0 0 8px rgba(149, 165, 166, 0.5)",
};
