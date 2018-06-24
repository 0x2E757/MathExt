import { IBase } from "../base";
export interface IRange {
    start: number;
    end: number;
}
export declare class Range implements IRange, IBase {
    start: number;
    end: number;
    constructor(start: number, end: number);
    constructor(range: IRange);
    shift: {
        (offset: number): Range;
        (offsetStart: number, offsetEnd: number): Range;
    };
    multiply: {
        (multiplier: number): Range;
        (multiplierStart: number, multiplierEnd: number): Range;
    };
    clamp: {
        (min: number, max: number): Range;
        (minStart: number, maxStart: number, minEnd: number, maxEnd: number): Range;
        (range: IRange): Range;
        (rangeStart: IRange, rangeEnd: IRange): Range;
    };
    clampStart: {
        (min: number, max: number): Range;
        (range: IRange): Range;
    };
    clampEnd: {
        (min: number, max: number): Range;
        (range: IRange): Range;
    };
    round: {
        (fractionDigits: number): Range;
        (fractionDigitsStart: number, fractionDigitsEnd: number): Range;
    };
    roundStart: {
        (fractionDigits: number): Range;
    };
    roundEnd: {
        (fractionDigits: number): Range;
    };
    normalize: {
        (): Range;
    };
    contains: {
        (value: number): boolean;
        (range: IRange): boolean;
    };
}
//# sourceMappingURL=range.d.ts.map