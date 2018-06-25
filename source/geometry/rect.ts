import { IBase } from "../base";
import { IRange } from "../misc";
import { IPoint, Point } from "./point";

import * as utils from "../utils";


export interface IRect {
    left: number;
    top: number;
    right: number;
    bottom: number;
}

export class Rect implements IRect, IBase {

    public left: number;
    public top: number;
    public right: number;
    public bottom: number;

    constructor();
    constructor(left: number, top: number, right: number, bottom: number);
    constructor(topLeft: IPoint, bottomRight: IPoint);
    constructor(rect: IRect);
    constructor() {
        if (typeof arguments[0] === "object") {
            if (arguments.length === 1) {
                // (rect: IRect): Rect
                type ExpectedArgs = [IRect];
                const [rect]: ExpectedArgs = <ExpectedArgs>(arguments as any);
                this.left = rect.left;
                this.top = rect.top;
                this.right = rect.right;
                this.bottom = rect.bottom;
            } else {
                // (topLeft: IPoint, bottomRight: IPoint): Rect
                type ExpectedArgs = [IPoint, IPoint];
                const [topLeft, bottomRight]: ExpectedArgs = <ExpectedArgs>(arguments as any);
                this.left = topLeft.x;
                this.top = topLeft.y;
                this.right = bottomRight.x;
                this.bottom = bottomRight.y;
            }
        } else {
            // (left: number = 0, top: number = 0, right: number = 0, bottom: number = 0): Rect
            type ExpectedArgs = [number, number, number, number];
            const [left, top, right, bottom]: ExpectedArgs = <ExpectedArgs>(arguments as any);
            this.left = left || 0;
            this.top = top || 0;
            this.right = right || 0;
            this.bottom = bottom || 0;
        }
    }

    public shift!: {
        (offsetHorizontal: number, offsetVertical: number): Rect;
        (offsetLeft: number, offsetTop: number, offsetRight: number, offsetBottom: number): Rect;
        (offset: IPoint): Rect;
    };

    public shiftLeft!: {
        (offset: number): Rect;
    };

    public shiftTop!: {
        (offset: number): Rect;
    };

    public shiftRight!: {
        (offset: number): Rect;
    };

    public shiftBottom!: {
        (offset: number): Rect;
    };

    public shiftHorizontal!: {
        (offset: number): Rect;
        (offsetLeft: number, offsetRight: number): Rect;
    };

    public shiftVertical!: {
        (offset: number): Rect;
        (offsetTop: number, offsetBottom: number): Rect;
    };

    public shiftTopLeft!: {
        (offset: IPoint): Rect;
        (offsetLeft: number, offsetTop: number): Rect;
    };

    public shiftTopRight!: {
        (offset: IPoint): Rect;
        (offsetRight: number, offsetTop: number): Rect;
    };

    public shiftBottomLeft!: {
        (offset: IPoint): Rect;
        (offsetLeft: number, offsetBottom: number): Rect;
    };

    public shiftBottomRight!: {
        (offset: IPoint): Rect;
        (offsetRight: number, offsetBottom: number): Rect;
    };

    public multiply!: {
        (multiplier: number): Rect;
        (multiplierHorizontal: number, multiplierVertical: number): Rect;
    };

    public multiplyHorizontal!: {
        (multiplier: number): Rect;
    };

    public multiplyVertical!: {
        (multiplier: number): Rect;
    };

    public clamp!: {
        (min: number, max: number): Rect;
        (minHorizontal: number, maxHorizontal: number, minVertical: number, maxVertical: number): Rect;
        (minLeft: number, maxLeft: number, minTop: number, maxTop: number, minRight: number, maxRight: number, minBottom: number, maxBottom: number): Rect;
        (rect: IRect): Rect;
        (rangeHorizontal: IRange, rangeVertical: IRange): Rect;
        (rangeLeft: IRange, rangeTop: IRange, rangeRight: IRange, rangeBottom: IRange): Rect;
    };

    public clampLeft!: {
        (min: number, max: number): Rect;
        (range: IRange): Rect;
    };

    public clampTop!: {
        (min: number, max: number): Rect;
        (range: IRange): Rect;
    };

    public clampRight!: {
        (min: number, max: number): Rect;
        (range: IRange): Rect;
    };

    public clampBottom!: {
        (min: number, max: number): Rect;
        (range: IRange): Rect;
    };

    public clampHorizontal!: {
        (min: number, max: number): Rect;
        (range: IRange): Rect;
    };

    public clampVertical!: {
        (min: number, max: number): Rect;
        (range: IRange): Rect;
    };

    public clampTopLeft!: {
        (min: number, max: number): Rect;
        (range: IRange): Rect;
    };

    public clampTopRight!: {
        (min: number, max: number): Rect;
        (range: IRange): Rect;
    };

    public clampBottomLeft!: {
        (min: number, max: number): Rect;
        (range: IRange): Rect;
    };

    public clampBottomRight!: {
        (min: number, max: number): Rect;
        (range: IRange): Rect;
    };

    public round!: {
        (fractionDigits: number): Rect;
        (fractionDigitsHorizontal: number, fractionDigitsVertical: number): Rect;
    };

    public roundHorizontal!: {
        (fractionDigits: number): Rect;
    };

    public roundVertical!: {
        (fractionDigits: number): Rect;
    };

    public normalize!: {
        (): Rect;
    };

    public topLeft!: {
        (): IPoint;
        (left: number, top: number): Rect;
        (topLeft: IPoint): Rect;
    };

    public topRight!: {
        (): IPoint;
        (right: number, top: number): Rect;
        (topRight: IPoint): Rect;
    };

    public bottomLeft!: {
        (): IPoint;
        (left: number, bottom: number): Rect;
        (bottomLeft: IPoint): Rect;
    };

    public bottomRight!: {
        (): IPoint;
        (right: number, bottom: number): Rect;
        (bottomRight: IPoint): Rect;
    };

    public width!: {
        (): number;
        (width: number): Rect;
    };

    public height!: {
        (): number;
        (height: number): Rect;
    };

    public contains!: {
        (point: IPoint): boolean;
        (rect: IRect): boolean;
    };

}

Rect.prototype.shift = function (): Rect {
    if (arguments.length === 1) {
        // (offset: IPoint): Rect
        type ExpectedArgs = [IPoint];
        const [offset]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.left += offset.x;
        this.top += offset.y;
        this.right += offset.x;
        this.bottom += offset.y;
    } else if (arguments.length === 2) {
        // (offsetHorizontal: number, offsetVertical: number): Rect
        type ExpectedArgs = [number, number];
        const [offsetHorizontal, offsetVertical]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.left += offsetHorizontal;
        this.top += offsetVertical;
        this.right += offsetHorizontal;
        this.bottom += offsetVertical;
    } else {
        // (offsetLeft: number, offsetTop: number, offsetRight: number, offsetBottom: number): Rect
        type ExpectedArgs = [number, number, number, number];
        const [offsetLeft, offsetTop, offsetRight, offsetBottom]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.left += offsetLeft;
        this.top += offsetTop;
        this.right += offsetRight;
        this.bottom += offsetBottom;
    }
    return this;
};

Rect.prototype.shiftLeft = function (): Rect {
    // (offset: number): Rect
    type ExpectedArgs = [number];
    const [offset]: ExpectedArgs = <ExpectedArgs>(arguments as any);
    this.left += offset;
    return this;
};

Rect.prototype.shiftTop = function (): Rect {
    // (offset: number): Rect
    type ExpectedArgs = [number];
    const [offset]: ExpectedArgs = <ExpectedArgs>(arguments as any);
    this.top += offset;
    return this;
};

Rect.prototype.shiftRight = function (): Rect {
    // (offset: number): Rect
    type ExpectedArgs = [number];
    const [offset]: ExpectedArgs = <ExpectedArgs>(arguments as any);
    this.right += offset;
    return this;
};

Rect.prototype.shiftBottom = function (): Rect {
    // (offset: number): Rect
    type ExpectedArgs = [number];
    const [offset]: ExpectedArgs = <ExpectedArgs>(arguments as any);
    this.bottom += offset;
    return this;
};

Rect.prototype.shiftHorizontal = function (): Rect {
    if (arguments.length === 1) {
        // (offset: number): Rect
        type ExpectedArgs = [number];
        const [offset]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.left += offset;
        this.right += offset;
    } else {
        // (offsetLeft: number, offsetRight: number): Rect
        type ExpectedArgs = [number, number];
        const [offsetLeft, offsetRight]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.left += offsetLeft;
        this.right += offsetRight;
    }
    return this;
};

Rect.prototype.shiftVertical = function (): Rect {
    if (arguments.length === 1) {
        // (offset: number): Rect
        type ExpectedArgs = [number];
        const [offset]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.top += offset;
        this.bottom += offset;
    } else {
        // (offsetLeft: number, offsetRight: number): Rect
        type ExpectedArgs = [number, number];
        const [offsetTop, offsetBottom]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.top += offsetTop;
        this.bottom += offsetBottom;
    }
    return this;
};

Rect.prototype.shiftTopLeft = function (): Rect {
    if (arguments.length === 1) {
        // (offset: number): Rect
        type ExpectedArgs = [number];
        const [offset]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.left += offset;
        this.top += offset;
    } else {
        // (offsetLeft: number, offsetTop: number): Rect
        type ExpectedArgs = [number, number];
        const [offsetLeft, offsetTop]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.left += offsetLeft;
        this.top += offsetTop;
    }
    return this;
};

Rect.prototype.shiftTopRight = function (): Rect {
    if (arguments.length === 1) {
        // (offset: number): Rect
        type ExpectedArgs = [number];
        const [offset]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.right += offset;
        this.top += offset;
    } else {
        // (offsetRight: number, offsetTop: number): Rect
        type ExpectedArgs = [number, number];
        const [offsetRight, offsetTop]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.right += offsetRight;
        this.top += offsetTop;
    }
    return this;
};

Rect.prototype.shiftBottomLeft = function (): Rect {
    if (arguments.length === 1) {
        // (offset: number): Rect
        type ExpectedArgs = [number];
        const [offset]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.left += offset;
        this.bottom += offset;
    } else {
        // (offsetLeft: number, offsetBottom: number): Rect
        type ExpectedArgs = [number, number];
        const [offsetLeft, offsetBottom]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.left += offsetLeft;
        this.bottom += offsetBottom;
    }
    return this;
};

Rect.prototype.shiftBottomRight = function (): Rect {
    if (arguments.length === 1) {
        // (offset: number): Rect
        type ExpectedArgs = [number];
        const [offset]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.right += offset;
        this.bottom += offset;
    } else {
        // (offsetRight: number, offsetBottom: number): Rect
        type ExpectedArgs = [number, number];
        const [offsetRight, offsetBottom]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.right += offsetRight;
        this.bottom += offsetBottom;
    }
    return this;
};

Rect.prototype.multiply = function (): Rect {
    if (arguments.length === 1) {
        // (multiplier: number): Rect
        type ExpectedArgs = [number];
        const [multiplier]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.left *= multiplier;
        this.top *= multiplier;
        this.right *= multiplier;
        this.bottom *= multiplier;
    } else {
        // (multiplierHorizontal: number, multiplierVertical: number): Rect
        type ExpectedArgs = [number, number];
        const [multiplierHorizontal, multiplierVertical]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.left *= multiplierHorizontal;
        this.top *= multiplierVertical;
        this.right *= multiplierHorizontal;
        this.bottom *= multiplierVertical;

    }
    return this;
};

Rect.prototype.multiplyHorizontal = function (): Rect {
    // (multiplier: number): Rect
    type ExpectedArgs = [number];
    const [multiplier]: ExpectedArgs = <ExpectedArgs>(arguments as any);
    this.left *= multiplier;
    this.right *= multiplier;
    return this;
};

Rect.prototype.multiplyVertical = function (): Rect {
    // (multiplier: number): Rect
    type ExpectedArgs = [number];
    const [multiplier]: ExpectedArgs = <ExpectedArgs>(arguments as any);
    this.top *= multiplier;
    this.bottom *= multiplier;
    return this;
};

Rect.prototype.clamp = function (): Rect {
    if (arguments.length === 1) {
        // (rect: IRect): Rect
        type ExpectedArgs = [IRect];
        const [rect]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.left = utils.clamp(this.left, rect.left, rect.right);
        this.top = utils.clamp(this.top, rect.top, rect.bottom);
        this.right = utils.clamp(this.right, rect.left, rect.right);
        this.bottom = utils.clamp(this.bottom, rect.top, rect.bottom);
    } else if (arguments.length === 2) {
        if (typeof arguments[0] === "object") {
            // (rangeHorizontal: IRange, rangeVertical: IRange): Rect
            type ExpectedArgs = [IRange, IRange];
            const [rangeHorizontal, rangeVertical]: ExpectedArgs = <ExpectedArgs>(arguments as any);
            this.left = utils.clamp(this.left, rangeHorizontal);
            this.top = utils.clamp(this.top, rangeVertical);
            this.right = utils.clamp(this.right, rangeHorizontal);
            this.bottom = utils.clamp(this.bottom, rangeVertical);
        } else {
            // (min: number, max: number): Rect
            type ExpectedArgs = [number, number];
            const [min, max]: ExpectedArgs = <ExpectedArgs>(arguments as any);
            this.left = utils.clamp(this.left, min, max);
            this.top = utils.clamp(this.top, min, max);
            this.right = utils.clamp(this.right, min, max);
            this.bottom = utils.clamp(this.bottom, min, max);
        }
    } else if (arguments.length === 4) {
        if (typeof arguments[0] === "object") {
            // (rangeLeft: IRange, rangeTop: IRange, rangeRight: IRange, rangeBottom: IRange): Rect
            type ExpectedArgs = [IRange, IRange, IRange, IRange];
            const [rangeLeft, rangeTop, rangeRight, rangeBottom]: ExpectedArgs = <ExpectedArgs>(arguments as any);
            this.left = utils.clamp(this.left, rangeLeft);
            this.top = utils.clamp(this.top, rangeTop);
            this.right = utils.clamp(this.right, rangeRight);
            this.bottom = utils.clamp(this.bottom, rangeBottom);
        } else {
            // (minHorizontal: number, maxHorizontal: number, minVertical: number, maxVertical: number): Rect
            type ExpectedArgs = [number, number, number, number];
            const [minHorizontal, maxHorizontal, minVertical, maxVertical]: ExpectedArgs = <ExpectedArgs>(arguments as any);
            this.left = utils.clamp(this.left, minHorizontal, maxHorizontal);
            this.top = utils.clamp(this.top, minVertical, maxVertical);
            this.right = utils.clamp(this.right, minHorizontal, maxHorizontal);
            this.bottom = utils.clamp(this.bottom, minVertical, maxVertical);
        }
    } else {
        // (minLeft: number, maxLeft: number, minTop: number, maxTop: number, minRight: number, maxRight: number, minBottom: number, maxBottom: number): Rect
        type ExpectedArgs = [number, number, number, number, number, number, number, number];
        const [minLeft, maxLeft, minTop, maxTop, minRight, maxRight, minBottom, maxBottom]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.left = utils.clamp(this.left, minLeft, maxLeft);
        this.top = utils.clamp(this.top, minTop, maxTop);
        this.right = utils.clamp(this.right, minRight, maxRight);
        this.bottom = utils.clamp(this.bottom, minBottom, maxBottom);
    }
    return this;
};

Rect.prototype.clampLeft = function (): Rect {
    if (arguments.length === 1) {
        // (range: IRange): Rect
        type ExpectedArgs = [IRange];
        const [range]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.left = utils.clamp(this.left, range);
    } else {
        // (min: number, max: number): Rect
        type ExpectedArgs = [number, number];
        const [min, max]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.left = utils.clamp(this.left, min, max);
    }
    return this;
};

Rect.prototype.clampTop = function (): Rect {
    if (arguments.length === 1) {
        // (range: IRange): Rect
        type ExpectedArgs = [IRange];
        const [range]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.top = utils.clamp(this.top, range);
    } else {
        // (min: number, max: number): Rect
        type ExpectedArgs = [number, number];
        const [min, max]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.top = utils.clamp(this.top, min, max);
    }
    return this;
};

Rect.prototype.clampRight = function (): Rect {
    if (arguments.length === 1) {
        // (range: IRange): Rect
        type ExpectedArgs = [IRange];
        const [range]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.right = utils.clamp(this.right, range);
    } else {
        // (min: number, max: number): Rect
        type ExpectedArgs = [number, number];
        const [min, max]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.right = utils.clamp(this.right, min, max);
    }
    return this;
};

Rect.prototype.clampBottom = function (): Rect {
    if (arguments.length === 1) {
        // (range: IRange): Rect
        type ExpectedArgs = [IRange];
        const [range]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.bottom = utils.clamp(this.bottom, range);
    } else {
        // (min: number, max: number): Rect
        type ExpectedArgs = [number, number];
        const [min, max]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.bottom = utils.clamp(this.bottom, min, max);
    }
    return this;
};

Rect.prototype.clampHorizontal = function (): Rect {
    if (arguments.length === 1) {
        // (range: IRange): Rect
        type ExpectedArgs = [IRange];
        const [range]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.left = utils.clamp(this.left, range);
        this.right = utils.clamp(this.right, range);
    } else {
        // (min: number, max: number): Rect
        type ExpectedArgs = [number, number];
        const [min, max]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.left = utils.clamp(this.left, min, max);
        this.right = utils.clamp(this.right, min, max);
    }
    return this;
};

Rect.prototype.clampVertical = function (): Rect {
    if (arguments.length === 1) {
        // (range: IRange): Rect
        type ExpectedArgs = [IRange];
        const [range]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.top = utils.clamp(this.top, range);
        this.bottom = utils.clamp(this.bottom, range);
    } else {
        // (min: number, max: number): Rect
        type ExpectedArgs = [number, number];
        const [min, max]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.top = utils.clamp(this.top, min, max);
        this.bottom = utils.clamp(this.bottom, min, max);
    }
    return this;
};

Rect.prototype.clampTopLeft = function (): Rect {
    if (arguments.length === 1) {
        // (range: IRange): Rect
        type ExpectedArgs = [IRange];
        const [range]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.left = utils.clamp(this.left, range);
        this.top = utils.clamp(this.top, range);
    } else {
        // (min: number, max: number): Rect
        type ExpectedArgs = [number, number];
        const [min, max]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.left = utils.clamp(this.left, min, max);
        this.top = utils.clamp(this.top, min, max);
    }
    return this;
};

Rect.prototype.clampTopRight = function (): Rect {
    if (arguments.length === 1) {
        // (range: IRange): Rect
        type ExpectedArgs = [IRange];
        const [range]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.right = utils.clamp(this.right, range);
        this.top = utils.clamp(this.top, range);
    } else {
        // (min: number, max: number): Rect
        type ExpectedArgs = [number, number];
        const [min, max]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.right = utils.clamp(this.right, min, max);
        this.top = utils.clamp(this.top, min, max);
    }
    return this;
};

Rect.prototype.clampBottomLeft = function (): Rect {
    if (arguments.length === 1) {
        // (range: IRange): Rect
        type ExpectedArgs = [IRange];
        const [range]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.left = utils.clamp(this.left, range);
        this.bottom = utils.clamp(this.bottom, range);
    } else {
        // (min: number, max: number): Rect
        type ExpectedArgs = [number, number];
        const [min, max]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.left = utils.clamp(this.left, min, max);
        this.bottom = utils.clamp(this.bottom, min, max);
    }
    return this;
};

Rect.prototype.clampBottomRight = function (): Rect {
    if (arguments.length === 1) {
        // (range: IRange): Rect
        type ExpectedArgs = [IRange];
        const [range]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.right = utils.clamp(this.right, range);
        this.bottom = utils.clamp(this.bottom, range);
    } else {
        // (min: number, max: number): Rect
        type ExpectedArgs = [number, number];
        const [min, max]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.right = utils.clamp(this.right, min, max);
        this.bottom = utils.clamp(this.bottom, min, max);
    }
    return this;
};

Rect.prototype.round = function (): Rect {
    if (arguments.length === 1) {
        // (fractionDigits: number): Rect
        type ExpectedArgs = [number];
        const [fractionDigits]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.left = utils.round(this.left, fractionDigits);
        this.top = utils.round(this.top, fractionDigits);
        this.right = utils.round(this.right, fractionDigits);
        this.bottom = utils.round(this.bottom, fractionDigits);
    } else {
        // (fractionDigitsHorizontal: number, fractionDigitsVertical: number): Rect
        type ExpectedArgs = [number, number];
        const [fractionDigitsHorizontal, fractionDigitsVertical]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.left = utils.round(this.left, fractionDigitsHorizontal);
        this.top = utils.round(this.top, fractionDigitsVertical);
        this.right = utils.round(this.right, fractionDigitsHorizontal);
        this.bottom = utils.round(this.bottom, fractionDigitsVertical);
    }
    return this;
};

Rect.prototype.roundHorizontal = function (): Rect {
    // (fractionDigits: number): Rect
    type ExpectedArgs = [number];
    const [fractionDigits]: ExpectedArgs = <ExpectedArgs>(arguments as any);
    this.left = utils.round(this.left, fractionDigits);
    this.right = utils.round(this.right, fractionDigits);
    return this;
};

Rect.prototype.roundVertical = function (): Rect {
    // (fractionDigits: number): Rect
    type ExpectedArgs = [number];
    const [fractionDigits]: ExpectedArgs = <ExpectedArgs>(arguments as any);
    this.top = utils.round(this.top, fractionDigits);
    this.bottom = utils.round(this.bottom, fractionDigits);
    return this;
};

Rect.prototype.normalize = function (): Rect {
    // (): Rect
    if (this.left > this.right) {
        const temp: number = this.left;
        this.left = this.right;
        this.right = temp;
    }
    if (this.top > this.bottom) {
        const temp: number = this.top;
        this.top = this.bottom;
        this.bottom = temp;
    }
    return this;
};

Rect.prototype.topLeft = function (): any {
    if (arguments.length === 0) {
        // (): IPoint
        return new Point(this.left, this.top);
    } else if (arguments.length === 1) {
        // (topLeft: IPoint): Rect
        type ExpectedArgs = [IPoint];
        const [topLeft]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.left = topLeft.x;
        this.top = topLeft.y;
        return this;
    } else {
        // (left: number, top: number): Rect
        type ExpectedArgs = [number, number];
        const [left, top]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.left = left;
        this.top = top;
        return this;
    }
};

Rect.prototype.topRight = function (): any {
    if (arguments.length === 0) {
        // (): IPoint
        return new Point(this.right, this.top);
    } else if (arguments.length === 1) {
        // (topRight: IPoint): Rect
        type ExpectedArgs = [IPoint];
        const [topLeft]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.right = topLeft.x;
        this.top = topLeft.y;
        return this;
    } else {
        // (right: number, top: number): Rect
        type ExpectedArgs = [number, number];
        const [right, top]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.right = right;
        this.top = top;
        return this;
    }
};

Rect.prototype.bottomLeft = function (): any {
    if (arguments.length === 0) {
        // (): IPoint
        return new Point(this.left, this.bottom);
    } else if (arguments.length === 1) {
        // (bottomLeft: IPoint): Rect
        type ExpectedArgs = [IPoint];
        const [bottomLeft]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.left = bottomLeft.x;
        this.bottom = bottomLeft.y;
        return this;
    } else {
        // (left: number, bottom: number): Rect
        type ExpectedArgs = [number, number];
        const [left, bottom]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.left = left;
        this.bottom = bottom;
        return this;
    }
};

Rect.prototype.bottomRight = function (): any {
    if (arguments.length === 0) {
        // (): IPoint
        return new Point(this.right, this.bottom);
    } else if (arguments.length === 1) {
        // (bottomRight: IPoint): Rect
        type ExpectedArgs = [IPoint];
        const [bottomLeft]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.right = bottomLeft.x;
        this.bottom = bottomLeft.y;
        return this;
    } else {
        // (right: number, bottom: number): Rect
        type ExpectedArgs = [number, number];
        const [right, bottom]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        this.right = right;
        this.bottom = bottom;
        return this;
    }
};

Rect.prototype.width = function (): any {
    if (arguments.length === 0) {
        // (): number
        return this.right - this.left;
    } else {
        // (width: number): Rect
        type ExpectedArgs = [number];
        const [width]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        const difference: number = width - (this.right - this.left);
        this.left -= difference / 2;
        this.right += difference / 2;
        return this;
    }
};

Rect.prototype.height = function (): any {
    if (arguments.length === 0) {
        // (): number
        return this.right - this.left;
    } else {
        // (height: number): Rect
        type ExpectedArgs = [number];
        const [height]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        const difference: number = height - (this.bottom - this.top);
        this.top -= difference / 2;
        this.bottom += difference / 2;
        return this;
    }
};

Rect.prototype.contains = function (): boolean {
    if ("x" in arguments[0]) {
        // (point: IPoint): boolean
        type ExpectedArgs = [IPoint];
        const [point]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        const containsPointX: boolean = this.left <= point.x && this.right >= point.x;
        const containsPointY: boolean = this.top <= point.y && this.bottom >= point.y;
        return containsPointX && containsPointY;
    } else {
        // (rect: IRect): boolean
        type ExpectedArgs = [IRect];
        const [rect]: ExpectedArgs = <ExpectedArgs>(arguments as any);
        const containsRectLeft: boolean = this.left <= rect.left && this.right >= rect.left;
        const containsRectTop: boolean = this.top <= rect.top && this.bottom >= rect.top;
        const containsRectRight: boolean = this.left <= rect.right && this.right >= rect.right;
        const containsRectBottom: boolean = this.top <= rect.bottom && this.bottom >= rect.bottom;
        return containsRectLeft && containsRectTop && containsRectRight && containsRectBottom;
    }
};