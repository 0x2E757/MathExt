import { IBase } from "../base";

import * as utils from "../utils";


export interface IRange {
    start: number;
    end: number;
}

export class Range implements IRange, IBase {

    public start: number;
    public end: number;

    constructor(start: number, end: number);
    constructor(range: IRange);
    constructor() {
        if (arguments.length === 1) {
            // (range: IRange): Range
            type ExpectedArgs = [IRange];
            const [range]: ExpectedArgs = <ExpectedArgs>(arguments as any);
            this.start = range.start;
            this.end = range.end;
        } else {
            // (start: number, end: number): Range
            type ExpectedArgs = [number, number];
            const [start, end]: ExpectedArgs = <ExpectedArgs>(arguments as any);
            this.start = start;
            this.end = end;
        }
    }

    public shift!: {
        (offset: number): Range;
        (offsetStart: number, offsetEnd: number): Range;
    };

    public multiply!: {
        (multiplier: number): Range,
        (multiplierStart: number, multiplierEnd: number): Range;
    };

    public clamp!: {
        (min: number, max: number): Range;
        (minStart: number, maxStart: number, minEnd: number, maxEnd: number): Range;
        (range: IRange): Range;
        (rangeStart: IRange, rangeEnd: IRange): Range;
    };

    public clampStart!: {
        (min: number, max: number): Range;
        (range: IRange): Range;
    };

    public clampEnd!: {
        (min: number, max: number): Range;
        (range: IRange): Range;
    };

    public round!: {
        (fractionDigits: number): Range;
        (fractionDigitsStart: number, fractionDigitsEnd: number): Range;
    };

    public roundStart!: {
        (fractionDigits: number): Range;
    };

    public roundEnd!: {
        (fractionDigits: number): Range;
    };

    public normalize!: {
        (): Range;
    };

    public contains!: {
        (value: number): boolean;
        (range: IRange): boolean;
    };

}

Range.prototype.shift = function (): Range {
    if (arguments.length === 1) {
        // (offset: number): Range
        type ExpectedArgs = [number];
        const [offset]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.start += offset;
        this.end += offset;
    } else {
        // (offsetStart: number, offsetEnd: number): Range
        type ExpectedArgs = [number, number];
        const [offsetStart, offsetEnd]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.start += offsetStart;
        this.end += offsetEnd;
    }
    return this;
};

Range.prototype.multiply = function (): Range {
    if (arguments.length === 1) {
        // (multiplier: number): Range
        type ExpectedArgs = [number];
        const [multiplier]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.start *= multiplier;
        this.end *= multiplier;
    } else {
        // (multiplierStart: number, multiplierEnd: number): Range
        type ExpectedArgs = [number, number];
        const [multiplierStart, multiplierEnd]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.start *= multiplierStart;
        this.end *= multiplierEnd;
    }
    return this;
};

Range.prototype.clamp = function (): Range {
    if (arguments.length === 1) {
        // (range: IRange): Range
        type ExpectedArgs = [IRange];
        const [range]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.start = utils.clamp(this.start, range);
        this.end = utils.clamp(this.end, range);
    } else if (arguments.length === 2) {
        if (typeof arguments[0] === "object") {
            // (rangeStart: IRange, rangeEnd: IRange): Range
            type ExpectedArgs = [IRange, IRange];
            const [rangeStart, rangeEnd]: ExpectedArgs = <ExpectedArgs>(arguments as any);
            this.start = utils.clamp(this.start, rangeStart);
            this.end = utils.clamp(this.end, rangeEnd);
        } else {
            // (min: number, max: number): Range
            type ExpectedArgs = [number, number];
            const [min, max]: ExpectedArgs = <ExpectedArgs>(arguments as any);
            this.start = utils.clamp(this.start, min, max);
            this.end = utils.clamp(this.end, min, max);
        }
    } else {
        // (minStart: number, maxStart: number, minEnd: number, maxEnd: number): Range
        type ExpectedArgs = [number, number, number, number];
        const [minStart, maxStart, minEnd, maxEnd]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.start = utils.clamp(this.start, minStart, maxStart);
        this.end = utils.clamp(this.end, minEnd, maxEnd);
    }
    return this;
};

Range.prototype.clampStart = function (): Range {
    if (arguments.length === 1) {
        // (range: IRange): Range
        type ExpectedArgs = [IRange];
        const [range]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.start = utils.clamp(this.start, range);
    } else {
        // (min: number, max: number): Range
        type ExpectedArgs = [number, number];
        const [min, max]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.start = utils.clamp(this.start, min, max);
    }
    return this;
};

Range.prototype.clampEnd = function (): Range {
    if (arguments.length === 1) {
        // (range: IRange): Range
        type ExpectedArgs = [IRange];
        const [range]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.end = utils.clamp(this.end, range);
    } else {
        // (min: number, max: number): Range
        type ExpectedArgs = [number, number];
        const [min, max]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.end = utils.clamp(this.end, min, max);
    }
    return this;
};

Range.prototype.round = function (): Range {
    if (arguments.length === 1) {
        // (fractionDigits: number): Range
        type ExpectedArgs = [number];
        const [fractionDigits]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.start = utils.round(this.start, fractionDigits);
        this.end = utils.round(this.end, fractionDigits);
    } else {
        // (fractionDigitsStart: number, fractionDigitsEnd: number): Range
        type ExpectedArgs = [number, number];
        const [fractionDigitsStart, fractionDigitsEnd]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.start = utils.round(this.start, fractionDigitsStart);
        this.end = utils.round(this.end, fractionDigitsEnd);
    }
    return this;
};

Range.prototype.roundStart = function (): Range {
    // (fractionDigits: number): Range
    type ExpectedArgs = [number];
    const [fractionDigits]: ExpectedArgs = <ExpectedArgs>(arguments as any);
    this.start = utils.round(this.start, fractionDigits);
    return this;
};

Range.prototype.roundEnd = function (): Range {
    // (fractionDigits: number): Range
    type ExpectedArgs = [number];
    const [fractionDigits]: ExpectedArgs = <ExpectedArgs>(arguments as any);
    this.end = utils.round(this.end, fractionDigits);
    return this;
};

Range.prototype.normalize = function (): Range {
    // (): Range
    if (this.start > this.end) {
        const temp: number = this.start;
        this.start = this.end;
        this.end = temp;
    }
    return this;
};

Range.prototype.contains = function (): boolean {
    if (typeof arguments[0] === "object") {
        // (range: IRange): boolean
        type ExpectedArgs = [IRange];
        const [range]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        return range.start >= this.start && range.end <= this.end;
    } else {
        // (value: number): boolean
        type ExpectedArgs = [number];
        const [value]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        return value >= this.start && value <= this.end;
    }
};