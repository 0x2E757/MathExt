import { IBase } from "../base";
import { IRange } from "../misc";

import * as utils from "../utils";


export interface IPoint {
    x: number;
    y: number;
    z: number;
}

export class Point implements IPoint, IBase {

    public x: number;
    public y: number;
    public z: number;

    constructor();
    constructor(x: number);
    constructor(x: number, y: number);
    constructor(x: number, y: number, z: number);
    constructor(point: IPoint);
    constructor(...args: any[]) {
        if (args.length === 1 && typeof args[0] === "object") {
            // (point: IPoint): Point
            type ExpectedArgs = [IPoint];
            const [point]: ExpectedArgs = args as ExpectedArgs;
            this.x = point.x;
            this.y = point.y;
            this.z = point.z;
        } else {
            // (x: number = 0, y: number = 0, z: number = 0): Point
            type ExpectedArgs = [number, number, number];
            const [x, y, z]: ExpectedArgs = args as ExpectedArgs;
            this.x = x || 0;
            this.y = y || 0;
            this.z = z || 0;
        }
    }

    public shift!: {
        (offsetX: number): Point;
        (offsetX: number, offsetY: number): Point;
        (offsetX: number, offsetY: number, offsetZ: number): Point;
        (point: IPoint): Point;
    };

    public shiftX!: {
        (offset: number): Point;
    };

    public shiftY!: {
        (offset: number): Point;
    };

    public shiftZ!: {
        (offset: number): Point;
    };

    public multiply!: {
        (multiplierX: number): Point;
        (multiplierX: number, multiplierY: number): Point;
        (multiplierX: number, multiplierY: number, multiplierZ: number): Point;
    };

    public multiplyX!: {
        (multiplier: number): Point;
    };

    public multiplyY!: {
        (multiplier: number): Point;
    };

    public multiplyZ!: {
        (multiplier: number): Point;
    };

    public clamp!: {
        (min: number, max: number): Point;
        (minX: number, maxX: number, minY: number, maxY: number, minZ: number, maxZ: number): Point;
        (range: IRange): Point;
        (rangeX: IRange, rangeY: IRange, rangeZ: IRange): Point;
    };

    public clampX!: {
        (min: number, max: number): Point;
        (range: IRange): Point;
    };

    public clampY!: {
        (min: number, max: number): Point;
        (range: IRange): Point;
    };

    public clampZ!: {
        (min: number, max: number): Point;
        (range: IRange): Point;
    };

    public round!: {
        (fractionDigits: number): Point;
        (fractionDigitsX: number, fractionDigitsY: number, fractionDigitsZ: number): Point;
    };

    public roundX!: {
        (fractionDigits: number): Point;
    };

    public roundY!: {
        (fractionDigits: number): Point;
    };

    public roundZ!: {
        (fractionDigits: number): Point;
    };

}

Point.prototype.shift = function (...args: any[]): Point {
    if (args.length === 1) {
        if (typeof args[0] === "object") {
            // (offset: IPoint): Point
            type ExpectedArgs = [IPoint];
            const [offset]: ExpectedArgs = args as ExpectedArgs;
            this.x += offset.x;
            this.y += offset.y;
            this.z += offset.z;
        } else {
            // (offsetX: number): Point
            type ExpectedArgs = [number];
            const [offsetX]: ExpectedArgs = args as ExpectedArgs;
            this.x += offsetX;
        }
    } else if (args.length === 2) {
        // (offsetX: number, offsetY: number): Point
        type ExpectedArgs = [number, number];
        const [offsetX, offsetY]: ExpectedArgs = args as ExpectedArgs;
        this.x += offsetX;
        this.y += offsetY;
    } else {
        // (offsetX: number, offsetY: number, offsetZ: number): Point
        type ExpectedArgs = [number, number, number];
        const [offsetX, offsetY, offsetZ]: ExpectedArgs = args as ExpectedArgs;
        this.x += offsetX;
        this.y += offsetY;
        this.z += offsetZ;
    }
    return this;
};

Point.prototype.shiftX = function (...args: any[]): Point {
    // (offset: number): Point
    type ExpectedArgs = [number];
    const [offset]: ExpectedArgs = args as ExpectedArgs;
    this.x += offset;
    return this;
};

Point.prototype.shiftY = function (...args: any[]): Point {
    // (offset: number): Point
    type ExpectedArgs = [number];
    const [offset]: ExpectedArgs = args as ExpectedArgs;
    this.y += offset;
    return this;
};

Point.prototype.shiftZ = function (...args: any[]): Point {
    // (offset: number): Point
    type ExpectedArgs = [number];
    const [offset]: ExpectedArgs = args as ExpectedArgs;
    this.z += offset;
    return this;
};

Point.prototype.multiply = function (...args: any[]): Point {
    if (args.length === 1) {
        // (multiplierX: number): Point
        type ExpectedArgs = [number];
        const [multiplierX]: ExpectedArgs = args as ExpectedArgs;
        this.x *= multiplierX;
    } else if (args.length === 2) {
        // (multiplierX: number, multiplierY: number): Point
        type ExpectedArgs = [number, number];
        const [multiplierX, multiplierY]: ExpectedArgs = args as ExpectedArgs;
        this.x *= multiplierX;
        this.y *= multiplierY;
    } else {
        // (multiplierX: number, multiplierY: number, multiplierZ: number): Point
        type ExpectedArgs = [number, number, number];
        const [multiplierX, multiplierY, multiplierZ]: ExpectedArgs = args as ExpectedArgs;
        this.x *= multiplierX;
        this.y *= multiplierY;
        this.z *= multiplierZ;
    }
    return this;
};

Point.prototype.multiplyX = function (...args: any[]): Point {
    // (multiplier: number): Point
    type ExpectedArgs = [number];
    const [multiplier]: ExpectedArgs = args as ExpectedArgs;
    this.x *= multiplier;
    return this;
};

Point.prototype.multiplyY = function (...args: any[]): Point {
    // (multiplier: number): Point
    type ExpectedArgs = [number];
    const [multiplier]: ExpectedArgs = args as ExpectedArgs;
    this.y *= multiplier;
    return this;
};

Point.prototype.multiplyZ = function (...args: any[]): Point {
    // (multiplier: number): Point
    type ExpectedArgs = [number];
    const [multiplier]: ExpectedArgs = args as ExpectedArgs;
    this.z *= multiplier;
    return this;
};

Point.prototype.clamp = function (...args: any[]): Point {
    if (args.length === 1) {
        // (range: IRange): Point
        type ExpectedArgs = [IRange];
        const [range]: ExpectedArgs = args as ExpectedArgs;
        this.x = utils.clamp(this.x, range);
        this.y = utils.clamp(this.y, range);
        this.z = utils.clamp(this.z, range);
    } else if (args.length === 2) {
        // (min: number, max: number): Point
        type ExpectedArgs = [number, number];
        const [min, max]: ExpectedArgs = args as ExpectedArgs;
        this.x = utils.clamp(this.x, min, max);
        this.y = utils.clamp(this.y, min, max);
        this.z = utils.clamp(this.z, min, max);
    } else if (args.length === 3) {
        // (rangeX: IRange, rangeY: IRange, rangeZ: IRange): Point
        type ExpectedArgs = [IRange, IRange, IRange];
        const [rangeX, rangeY, rangeZ]: ExpectedArgs = args as ExpectedArgs;
        this.x = utils.clamp(this.x, rangeX);
        this.y = utils.clamp(this.y, rangeY);
        this.z = utils.clamp(this.z, rangeZ);
    } else {
        // (minX: number, maxX: number, minY: number, maxY: number, minZ: number, maxZ: number): Point
        type ExpectedArgs = [number, number, number, number, number, number];
        const [minX, maxX, minY, maxY, minZ, maxZ]: ExpectedArgs = args as ExpectedArgs;
        this.x = utils.clamp(this.x, minX, maxX);
        this.y = utils.clamp(this.y, minY, maxY);
        this.z = utils.clamp(this.z, minZ, maxZ);

    }
    return this;
};

Point.prototype.clampX = function (...args: any[]): Point {
    if (args.length === 1) {
        // (range: IRange): Point
        type ExpectedArgs = [IRange];
        const [range]: ExpectedArgs = args as ExpectedArgs;
        this.x = utils.clamp(this.x, range);
    } else {
        // (min: number, max: number): Point
        type ExpectedArgs = [number, number];
        const [min, max]: ExpectedArgs = args as ExpectedArgs;
        this.x = utils.clamp(this.x, min, max);
    }
    return this;
};

Point.prototype.clampY = function (...args: any[]): Point {
    if (args.length === 1) {
        // (range: IRange): Point
        type ExpectedArgs = [IRange];
        const [range]: ExpectedArgs = args as ExpectedArgs;
        this.y = utils.clamp(this.y, range);
    } else {
        // (min: number, max: number): Point
        type ExpectedArgs = [number, number];
        const [min, max]: ExpectedArgs = args as ExpectedArgs;
        this.y = utils.clamp(this.y, min, max);
    }
    return this;
};

Point.prototype.clampZ = function (...args: any[]): Point {
    if (args.length === 1) {
        // (range: IRange): Point
        type ExpectedArgs = [IRange];
        const [range]: ExpectedArgs = args as ExpectedArgs;
        this.z = utils.clamp(this.z, range);
    } else {
        // (min: number, max: number): Point
        type ExpectedArgs = [number, number];
        const [min, max]: ExpectedArgs = args as ExpectedArgs;
        this.z = utils.clamp(this.z, min, max);
    }
    return this;
};

Point.prototype.round = function (...args: any[]): Point {
    if (args.length === 1) {
        // (fractionDigits: number): Point
        type ExpectedArgs = [number];
        const [fractionDigits]: ExpectedArgs = args as ExpectedArgs;
        this.x = utils.round(this.x, fractionDigits);
        this.y = utils.round(this.y, fractionDigits);
        this.z = utils.round(this.z, fractionDigits);
    } else {
        // (fractionDigitsX: number, fractionDigitsY: number, fractionDigitsZ: number): Point
        type ExpectedArgs = [number, number, number];
        const [fractionDigitsX, fractionDigitsY, fractionDigitsZ]: ExpectedArgs = args as ExpectedArgs;
        this.x = utils.round(this.x, fractionDigitsX);
        this.y = utils.round(this.y, fractionDigitsY);
        this.z = utils.round(this.z, fractionDigitsZ);
    }
    return this;
};

Point.prototype.roundX = function (...args: any[]): Point {
    // (fractionDigits: number): Point
    type ExpectedArgs = [number];
    const [fractionDigits]: ExpectedArgs = args as ExpectedArgs;
    this.x = utils.round(this.x, fractionDigits);
    return this;
};

Point.prototype.roundY = function (...args: any[]): Point {
    // (fractionDigits: number): Point
    type ExpectedArgs = [number];
    const [fractionDigits]: ExpectedArgs = args as ExpectedArgs;
    this.y = utils.round(this.y, fractionDigits);
    return this;
};

Point.prototype.roundZ = function (...args: any[]): Point {
    // (fractionDigits: number): Point
    type ExpectedArgs = [number];
    const [fractionDigits]: ExpectedArgs = args as ExpectedArgs;
    this.z = utils.round(this.z, fractionDigits);
    return this;
};