import { IRange } from "./misc";


export const clamp: {
    (value: number, min: number, max: number): number;
    (value: number, range: IRange): number;
} = (...args: any[]): number => {
    if (args.length === 2) {
        // (value: number, range: IRange): number
        type ExpectedArgs = [number, IRange];
        const [value, range]: ExpectedArgs = args as ExpectedArgs;
        return value < range.start ? range.start : value > range.end ? range.end : value;
    } else {
        // (value: number, min: number, max: number): number
        type ExpectedArgs = [number, number, number];
        const [value, min, max]: ExpectedArgs = args as ExpectedArgs;
        return value < min ? min : value > max ? max : value;
    }
};

export const round: {
    (value: number, fractionDigits: number): number;
} = (...args: any[]): number => {
    // (value: number, fractionDigits: number): number
    type ExpectedArgs = [number, number];
    const [value, fractionDigits]: ExpectedArgs = args as ExpectedArgs;
    return Number(value.toFixed(fractionDigits));
};

export const random: {
    (min: number, max: number): number;
    (min: number, max: number, integer: boolean): number;
    (range: IRange): number;
    (range: IRange, integer: boolean): number;
} = (...args: any[]): number => {
    if (args.length === 1) {
        // (range: IRange): number
        type ExpectedArgs = [IRange];
        const [range]: ExpectedArgs = args as ExpectedArgs;
        return Math.random() * (range.end - range.start) + range.start;
    } else if (args.length === 2) {
        if (typeof args[0] === "object") {
            // (range: IRange, integer: boolean): number
            type ExpectedArgs = [IRange, boolean];
            const [range, integer]: ExpectedArgs = args as ExpectedArgs;
            if (integer) {
                return Math.floor(Math.random() * (range.end - range.start)) + range.start;
            } else {
                return Math.random() * (range.end - range.start) + range.start;
            }
        } else {
            // (min: number, max: number): number
            type ExpectedArgs = [number, number];
            const [min, max]: ExpectedArgs = args as ExpectedArgs;
            return Math.random() * (max - min) + min;
        }
    } else {
        // (min: number, max: number, integer: boolean): number
        type ExpectedArgs = [number, number, boolean];
        const [min, max, integer]: ExpectedArgs = args as ExpectedArgs;
        if (integer) {
            return Math.floor(Math.random() * (max - min)) + min;
        } else {
            return Math.random() * (max - min) + min;
        }
    }
};