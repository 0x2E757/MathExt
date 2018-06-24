import { IRange } from "./misc";
export declare const clamp: {
    (value: number, min: number, max: number): number;
    (value: number, range: IRange): number;
};
export declare const round: {
    (value: number, fractionDigits: number): number;
};
export declare const random: {
    (min: number, max: number): number;
    (min: number, max: number, integer: boolean): number;
    (range: IRange): number;
    (range: IRange, integer: boolean): number;
};
//# sourceMappingURL=utils.d.ts.map