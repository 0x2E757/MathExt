import { IBase } from "../base";
import { IRange } from "../misc";
import { IPoint } from "./point";
export interface IRect {
    left: number;
    top: number;
    right: number;
    bottom: number;
}
export declare class Rect implements IRect, IBase {
    left: number;
    top: number;
    right: number;
    bottom: number;
    constructor();
    constructor(left: number, top: number, right: number, bottom: number);
    constructor(topLeft: IPoint, bottomRight: IPoint);
    constructor(rect: IRect);
    shift: {
        (offsetHorizontal: number, offsetVertical: number): Rect;
        (offsetLeft: number, offsetTop: number, offsetRight: number, offsetBottom: number): Rect;
        (offset: IPoint): Rect;
    };
    shiftLeft: {
        (offset: number): Rect;
    };
    shiftTop: {
        (offset: number): Rect;
    };
    shiftRight: {
        (offset: number): Rect;
    };
    shiftBottom: {
        (offset: number): Rect;
    };
    shiftHorizontal: {
        (offset: number): Rect;
        (offsetLeft: number, offsetRight: number): Rect;
    };
    shiftVertical: {
        (offset: number): Rect;
        (offsetTop: number, offsetBottom: number): Rect;
    };
    shiftTopLeft: {
        (offset: IPoint): Rect;
        (offsetLeft: number, offsetTop: number): Rect;
    };
    shiftTopRight: {
        (offset: IPoint): Rect;
        (offsetRight: number, offsetTop: number): Rect;
    };
    shiftBottomLeft: {
        (offset: IPoint): Rect;
        (offsetLeft: number, offsetBottom: number): Rect;
    };
    shiftBottomRight: {
        (offset: IPoint): Rect;
        (offsetRight: number, offsetBottom: number): Rect;
    };
    multiply: {
        (multiplier: number): Rect;
        (multiplierHorizontal: number, multiplierVertical: number): Rect;
    };
    multiplyHorizontal: {
        (multiplier: number): Rect;
    };
    multiplyVertical: {
        (multiplier: number): Rect;
    };
    clamp: {
        (min: number, max: number): Rect;
        (minHorizontal: number, maxHorizontal: number, minVertical: number, maxVertical: number): Rect;
        (minLeft: number, maxLeft: number, minTop: number, maxTop: number, minRight: number, maxRight: number, minBottom: number, maxBottom: number): Rect;
        (rect: IRect): Rect;
        (rangeHorizontal: IRange, rangeVertical: IRange): Rect;
        (rangeLeft: IRange, rangeTop: IRange, rangeRight: IRange, rangeBottom: IRange): Rect;
    };
    clampLeft: {
        (min: number, max: number): Rect;
        (range: IRange): Rect;
    };
    clampTop: {
        (min: number, max: number): Rect;
        (range: IRange): Rect;
    };
    clampRight: {
        (min: number, max: number): Rect;
        (range: IRange): Rect;
    };
    clampBottom: {
        (min: number, max: number): Rect;
        (range: IRange): Rect;
    };
    clampHorizontal: {
        (min: number, max: number): Rect;
        (range: IRange): Rect;
    };
    clampVertical: {
        (min: number, max: number): Rect;
        (range: IRange): Rect;
    };
    clampTopLeft: {
        (min: number, max: number): Rect;
        (range: IRange): Rect;
    };
    clampTopRight: {
        (min: number, max: number): Rect;
        (range: IRange): Rect;
    };
    clampBottomLeft: {
        (min: number, max: number): Rect;
        (range: IRange): Rect;
    };
    clampBottomRight: {
        (min: number, max: number): Rect;
        (range: IRange): Rect;
    };
    round: {
        (fractionDigits: number): Rect;
        (fractionDigitsHorizontal: number, fractionDigitsVertical: number): Rect;
    };
    roundHorizontal: {
        (fractionDigits: number): Rect;
    };
    roundVertical: {
        (fractionDigits: number): Rect;
    };
    normalize: {
        (): Rect;
    };
    topLeft: {
        (): IPoint;
        (left: number, top: number): Rect;
        (topLeft: IPoint): Rect;
    };
    topRight: {
        (): IPoint;
        (right: number, top: number): Rect;
        (topRight: IPoint): Rect;
    };
    bottomLeft: {
        (): IPoint;
        (left: number, bottom: number): Rect;
        (bottomLeft: IPoint): Rect;
    };
    bottomRight: {
        (): IPoint;
        (right: number, bottom: number): Rect;
        (bottomRight: IPoint): Rect;
    };
    width: {
        (): number;
        (width: number): Rect;
    };
    height: {
        (): number;
        (height: number): Rect;
    };
    contains: {
        (point: IPoint): boolean;
        (rect: IRect): boolean;
    };
}
//# sourceMappingURL=rect.d.ts.map