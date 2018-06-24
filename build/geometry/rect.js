"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const point_1 = require("./point");
const utils = __importStar(require("../utils"));
class Rect {
    constructor(...args) {
        if (typeof args[0] === "object") {
            if (args.length === 1) {
                const [rect] = args;
                this.left = rect.left;
                this.top = rect.top;
                this.right = rect.right;
                this.bottom = rect.bottom;
            }
            else {
                const [topLeft, bottomRight] = args;
                this.left = topLeft.x;
                this.top = topLeft.y;
                this.right = bottomRight.x;
                this.bottom = bottomRight.y;
            }
        }
        else {
            const [left, top, right, bottom] = args;
            this.left = left || 0;
            this.top = top || 0;
            this.right = right || 0;
            this.bottom = bottom || 0;
        }
    }
}
exports.Rect = Rect;
Rect.prototype.shift = function (...args) {
    if (args.length === 1) {
        const [offset] = args;
        this.left += offset.x;
        this.top += offset.y;
        this.right += offset.x;
        this.bottom += offset.y;
    }
    else if (args.length === 2) {
        const [offsetHorizontal, offsetVertical] = args;
        this.left += offsetHorizontal;
        this.top += offsetVertical;
        this.right += offsetHorizontal;
        this.bottom += offsetVertical;
    }
    else {
        const [offsetLeft, offsetTop, offsetRight, offsetBottom] = args;
        this.left += offsetLeft;
        this.top += offsetTop;
        this.right += offsetRight;
        this.bottom += offsetBottom;
    }
    return this;
};
Rect.prototype.shiftLeft = function (...args) {
    const [offset] = args;
    this.left += offset;
    return this;
};
Rect.prototype.shiftTop = function (...args) {
    const [offset] = args;
    this.top += offset;
    return this;
};
Rect.prototype.shiftRight = function (...args) {
    const [offset] = args;
    this.right += offset;
    return this;
};
Rect.prototype.shiftBottom = function (...args) {
    const [offset] = args;
    this.bottom += offset;
    return this;
};
Rect.prototype.shiftHorizontal = function (...args) {
    if (args.length === 1) {
        const [offset] = args;
        this.left += offset;
        this.right += offset;
    }
    else {
        const [offsetLeft, offsetRight] = args;
        this.left += offsetLeft;
        this.right += offsetRight;
    }
    return this;
};
Rect.prototype.shiftVertical = function (...args) {
    if (args.length === 1) {
        const [offset] = args;
        this.top += offset;
        this.bottom += offset;
    }
    else {
        const [offsetTop, offsetBottom] = args;
        this.top += offsetTop;
        this.bottom += offsetBottom;
    }
    return this;
};
Rect.prototype.shiftTopLeft = function (...args) {
    if (args.length === 1) {
        const [offset] = args;
        this.left += offset;
        this.top += offset;
    }
    else {
        const [offsetLeft, offsetTop] = args;
        this.left += offsetLeft;
        this.top += offsetTop;
    }
    return this;
};
Rect.prototype.shiftTopRight = function (...args) {
    if (args.length === 1) {
        const [offset] = args;
        this.right += offset;
        this.top += offset;
    }
    else {
        const [offsetRight, offsetTop] = args;
        this.right += offsetRight;
        this.top += offsetTop;
    }
    return this;
};
Rect.prototype.shiftBottomLeft = function (...args) {
    if (args.length === 1) {
        const [offset] = args;
        this.left += offset;
        this.bottom += offset;
    }
    else {
        const [offsetLeft, offsetBottom] = args;
        this.left += offsetLeft;
        this.bottom += offsetBottom;
    }
    return this;
};
Rect.prototype.shiftBottomRight = function (...args) {
    if (args.length === 1) {
        const [offset] = args;
        this.right += offset;
        this.bottom += offset;
    }
    else {
        const [offsetRight, offsetBottom] = args;
        this.right += offsetRight;
        this.bottom += offsetBottom;
    }
    return this;
};
Rect.prototype.multiply = function (...args) {
    if (args.length === 1) {
        const [multiplier] = args;
        this.left *= multiplier;
        this.top *= multiplier;
        this.right *= multiplier;
        this.bottom *= multiplier;
    }
    else {
        const [multiplierHorizontal, multiplierVertical] = args;
        this.left *= multiplierHorizontal;
        this.top *= multiplierVertical;
        this.right *= multiplierHorizontal;
        this.bottom *= multiplierVertical;
    }
    return this;
};
Rect.prototype.multiplyHorizontal = function (...args) {
    const [multiplier] = args;
    this.left *= multiplier;
    this.right *= multiplier;
    return this;
};
Rect.prototype.multiplyVertical = function (...args) {
    const [multiplier] = args;
    this.top *= multiplier;
    this.bottom *= multiplier;
    return this;
};
Rect.prototype.clamp = function (...args) {
    if (args.length === 1) {
        const [rect] = args;
        this.left = utils.clamp(this.left, rect.left, rect.right);
        this.top = utils.clamp(this.top, rect.top, rect.bottom);
        this.right = utils.clamp(this.right, rect.left, rect.right);
        this.bottom = utils.clamp(this.bottom, rect.top, rect.bottom);
    }
    else if (args.length === 2) {
        if (typeof args[0] === "object") {
            const [rangeHorizontal, rangeVertical] = args;
            this.left = utils.clamp(this.left, rangeHorizontal);
            this.top = utils.clamp(this.top, rangeVertical);
            this.right = utils.clamp(this.right, rangeHorizontal);
            this.bottom = utils.clamp(this.bottom, rangeVertical);
        }
        else {
            const [min, max] = args;
            this.left = utils.clamp(this.left, min, max);
            this.top = utils.clamp(this.top, min, max);
            this.right = utils.clamp(this.right, min, max);
            this.bottom = utils.clamp(this.bottom, min, max);
        }
    }
    else if (args.length === 4) {
        if (typeof args[0] === "object") {
            const [rangeLeft, rangeTop, rangeRight, rangeBottom] = args;
            this.left = utils.clamp(this.left, rangeLeft);
            this.top = utils.clamp(this.top, rangeTop);
            this.right = utils.clamp(this.right, rangeRight);
            this.bottom = utils.clamp(this.bottom, rangeBottom);
        }
        else {
            const [minHorizontal, maxHorizontal, minVertical, maxVertical] = args;
            this.left = utils.clamp(this.left, minHorizontal, maxHorizontal);
            this.top = utils.clamp(this.top, minVertical, maxVertical);
            this.right = utils.clamp(this.right, minHorizontal, maxHorizontal);
            this.bottom = utils.clamp(this.bottom, minVertical, maxVertical);
        }
    }
    else {
        const [minLeft, maxLeft, minTop, maxTop, minRight, maxRight, minBottom, maxBottom] = args;
        this.left = utils.clamp(this.left, minLeft, maxLeft);
        this.top = utils.clamp(this.top, minTop, maxTop);
        this.right = utils.clamp(this.right, minRight, maxRight);
        this.bottom = utils.clamp(this.bottom, minBottom, maxBottom);
    }
    return this;
};
Rect.prototype.clampLeft = function (...args) {
    if (args.length === 1) {
        const [range] = args;
        this.left = utils.clamp(this.left, range);
    }
    else {
        const [min, max] = args;
        this.left = utils.clamp(this.left, min, max);
    }
    return this;
};
Rect.prototype.clampTop = function (...args) {
    if (args.length === 1) {
        const [range] = args;
        this.top = utils.clamp(this.top, range);
    }
    else {
        const [min, max] = args;
        this.top = utils.clamp(this.top, min, max);
    }
    return this;
};
Rect.prototype.clampRight = function (...args) {
    if (args.length === 1) {
        const [range] = args;
        this.right = utils.clamp(this.right, range);
    }
    else {
        const [min, max] = args;
        this.right = utils.clamp(this.right, min, max);
    }
    return this;
};
Rect.prototype.clampBottom = function (...args) {
    if (args.length === 1) {
        const [range] = args;
        this.bottom = utils.clamp(this.bottom, range);
    }
    else {
        const [min, max] = args;
        this.bottom = utils.clamp(this.bottom, min, max);
    }
    return this;
};
Rect.prototype.clampHorizontal = function (...args) {
    if (args.length === 1) {
        const [range] = args;
        this.left = utils.clamp(this.left, range);
        this.right = utils.clamp(this.right, range);
    }
    else {
        const [min, max] = args;
        this.left = utils.clamp(this.left, min, max);
        this.right = utils.clamp(this.right, min, max);
    }
    return this;
};
Rect.prototype.clampVertical = function (...args) {
    if (args.length === 1) {
        const [range] = args;
        this.top = utils.clamp(this.top, range);
        this.bottom = utils.clamp(this.bottom, range);
    }
    else {
        const [min, max] = args;
        this.top = utils.clamp(this.top, min, max);
        this.bottom = utils.clamp(this.bottom, min, max);
    }
    return this;
};
Rect.prototype.clampTopLeft = function (...args) {
    if (args.length === 1) {
        const [range] = args;
        this.left = utils.clamp(this.left, range);
        this.top = utils.clamp(this.top, range);
    }
    else {
        const [min, max] = args;
        this.left = utils.clamp(this.left, min, max);
        this.top = utils.clamp(this.top, min, max);
    }
    return this;
};
Rect.prototype.clampTopRight = function (...args) {
    if (args.length === 1) {
        const [range] = args;
        this.right = utils.clamp(this.right, range);
        this.top = utils.clamp(this.top, range);
    }
    else {
        const [min, max] = args;
        this.right = utils.clamp(this.right, min, max);
        this.top = utils.clamp(this.top, min, max);
    }
    return this;
};
Rect.prototype.clampBottomLeft = function (...args) {
    if (args.length === 1) {
        const [range] = args;
        this.left = utils.clamp(this.left, range);
        this.bottom = utils.clamp(this.bottom, range);
    }
    else {
        const [min, max] = args;
        this.left = utils.clamp(this.left, min, max);
        this.bottom = utils.clamp(this.bottom, min, max);
    }
    return this;
};
Rect.prototype.clampBottomRight = function (...args) {
    if (args.length === 1) {
        const [range] = args;
        this.right = utils.clamp(this.right, range);
        this.bottom = utils.clamp(this.bottom, range);
    }
    else {
        const [min, max] = args;
        this.right = utils.clamp(this.right, min, max);
        this.bottom = utils.clamp(this.bottom, min, max);
    }
    return this;
};
Rect.prototype.round = function (...args) {
    if (args.length === 1) {
        const [fractionDigits] = args;
        this.left = utils.round(this.left, fractionDigits);
        this.top = utils.round(this.top, fractionDigits);
        this.right = utils.round(this.right, fractionDigits);
        this.bottom = utils.round(this.bottom, fractionDigits);
    }
    else {
        const [fractionDigitsHorizontal, fractionDigitsVertical] = args;
        this.left = utils.round(this.left, fractionDigitsHorizontal);
        this.top = utils.round(this.top, fractionDigitsVertical);
        this.right = utils.round(this.right, fractionDigitsHorizontal);
        this.bottom = utils.round(this.bottom, fractionDigitsVertical);
    }
    return this;
};
Rect.prototype.roundHorizontal = function (...args) {
    const [fractionDigits] = args;
    this.left = utils.round(this.left, fractionDigits);
    this.right = utils.round(this.right, fractionDigits);
    return this;
};
Rect.prototype.roundVertical = function (...args) {
    const [fractionDigits] = args;
    this.top = utils.round(this.top, fractionDigits);
    this.bottom = utils.round(this.bottom, fractionDigits);
    return this;
};
Rect.prototype.normalize = function () {
    // (): Rect
    if (this.left > this.right) {
        const temp = this.left;
        this.left = this.right;
        this.right = temp;
    }
    if (this.top > this.bottom) {
        const temp = this.top;
        this.top = this.bottom;
        this.bottom = temp;
    }
    return this;
};
Rect.prototype.topLeft = function (...args) {
    if (args.length === 0) {
        // (): IPoint
        return new point_1.Point(this.left, this.top);
    }
    else if (args.length === 1) {
        const [topLeft] = args;
        this.left = topLeft.x;
        this.top = topLeft.y;
        return this;
    }
    else {
        const [left, top] = args;
        this.left = left;
        this.top = top;
        return this;
    }
};
Rect.prototype.topRight = function (...args) {
    if (args.length === 0) {
        // (): IPoint
        return new point_1.Point(this.right, this.top);
    }
    else if (args.length === 1) {
        const [topLeft] = args;
        this.right = topLeft.x;
        this.top = topLeft.y;
        return this;
    }
    else {
        const [right, top] = args;
        this.right = right;
        this.top = top;
        return this;
    }
};
Rect.prototype.bottomLeft = function (...args) {
    if (args.length === 0) {
        // (): IPoint
        return new point_1.Point(this.left, this.bottom);
    }
    else if (args.length === 1) {
        const [bottomLeft] = args;
        this.left = bottomLeft.x;
        this.bottom = bottomLeft.y;
        return this;
    }
    else {
        const [left, bottom] = args;
        this.left = left;
        this.bottom = bottom;
        return this;
    }
};
Rect.prototype.bottomRight = function (...args) {
    if (args.length === 0) {
        // (): IPoint
        return new point_1.Point(this.right, this.bottom);
    }
    else if (args.length === 1) {
        const [bottomLeft] = args;
        this.right = bottomLeft.x;
        this.bottom = bottomLeft.y;
        return this;
    }
    else {
        const [right, bottom] = args;
        this.right = right;
        this.bottom = bottom;
        return this;
    }
};
Rect.prototype.width = function (...args) {
    if (args.length === 0) {
        // (): number
        return this.right - this.left;
    }
    else {
        const [width] = args;
        const difference = width - (this.right - this.left);
        this.left -= difference / 2;
        this.right += difference / 2;
        return this;
    }
};
Rect.prototype.height = function (...args) {
    if (args.length === 0) {
        // (): number
        return this.right - this.left;
    }
    else {
        const [height] = args;
        const difference = height - (this.bottom - this.top);
        this.top -= difference / 2;
        this.bottom += difference / 2;
        return this;
    }
};
Rect.prototype.contains = function (...args) {
    if ("x" in args[0]) {
        const [point] = args;
        const containsPointX = this.left <= point.x && this.right >= point.x;
        const containsPointY = this.top <= point.y && this.bottom >= point.y;
        return containsPointX && containsPointY;
    }
    else {
        const [rect] = args;
        const containsRectLeft = this.left <= rect.left && this.right >= rect.left;
        const containsRectTop = this.top <= rect.top && this.bottom >= rect.top;
        const containsRectRight = this.left <= rect.right && this.right >= rect.right;
        const containsRectBottom = this.top <= rect.bottom && this.bottom >= rect.bottom;
        return containsRectLeft && containsRectTop && containsRectRight && containsRectBottom;
    }
};
//# sourceMappingURL=rect.js.map