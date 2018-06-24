import { IBase } from "../base";
import { IRange } from "../misc";
export interface IPoint {
    x: number;
    y: number;
    z: number;
}
export declare class Point implements IPoint, IBase {
    x: number;
    y: number;
    z: number;
    constructor();
    constructor(x: number);
    constructor(x: number, y: number);
    constructor(x: number, y: number, z: number);
    constructor(point: IPoint);
    shift: {
        (offsetX: number): Point;
        (offsetX: number, offsetY: number): Point;
        (offsetX: number, offsetY: number, offsetZ: number): Point;
        (point: IPoint): Point;
    };
    shiftX: {
        (offset: number): Point;
    };
    shiftY: {
        (offset: number): Point;
    };
    shiftZ: {
        (offset: number): Point;
    };
    multiply: {
        (multiplierX: number): Point;
        (multiplierX: number, multiplierY: number): Point;
        (multiplierX: number, multiplierY: number, multiplierZ: number): Point;
    };
    multiplyX: {
        (multiplier: number): Point;
    };
    multiplyY: {
        (multiplier: number): Point;
    };
    multiplyZ: {
        (multiplier: number): Point;
    };
    clamp: {
        (min: number, max: number): Point;
        (minX: number, maxX: number, minY: number, maxY: number, minZ: number, maxZ: number): Point;
        (range: IRange): Point;
        (rangeX: IRange, rangeY: IRange, rangeZ: IRange): Point;
    };
    clampX: {
        (min: number, max: number): Point;
        (range: IRange): Point;
    };
    clampY: {
        (min: number, max: number): Point;
        (range: IRange): Point;
    };
    clampZ: {
        (min: number, max: number): Point;
        (range: IRange): Point;
    };
    round: {
        (fractionDigits: number): Point;
        (fractionDigitsX: number, fractionDigitsY: number, fractionDigitsZ: number): Point;
    };
    roundX: {
        (fractionDigits: number): Point;
    };
    roundY: {
        (fractionDigits: number): Point;
    };
    roundZ: {
        (fractionDigits: number): Point;
    };
}
//# sourceMappingURL=point.d.ts.map