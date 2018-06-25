"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var point_1 = require("./point");
var utils = __importStar(require("../utils"));
var Rect = /** @class */ (function () {
    function Rect() {
        if (typeof arguments[0] === "object") {
            if (arguments.length === 1) {
                var rect = arguments[0];
                this.left = rect.left;
                this.top = rect.top;
                this.right = rect.right;
                this.bottom = rect.bottom;
            }
            else {
                var _a = arguments, topLeft = _a[0], bottomRight = _a[1];
                this.left = topLeft.x;
                this.top = topLeft.y;
                this.right = bottomRight.x;
                this.bottom = bottomRight.y;
            }
        }
        else {
            var _b = arguments, left = _b[0], top_1 = _b[1], right = _b[2], bottom = _b[3];
            this.left = left || 0;
            this.top = top_1 || 0;
            this.right = right || 0;
            this.bottom = bottom || 0;
        }
    }
    return Rect;
}());
exports.Rect = Rect;
Rect.prototype.shift = function () {
    if (arguments.length === 1) {
        var offset = arguments[0];
        this.left += offset.x;
        this.top += offset.y;
        this.right += offset.x;
        this.bottom += offset.y;
    }
    else if (arguments.length === 2) {
        var _a = arguments, offsetHorizontal = _a[0], offsetVertical = _a[1];
        this.left += offsetHorizontal;
        this.top += offsetVertical;
        this.right += offsetHorizontal;
        this.bottom += offsetVertical;
    }
    else {
        var _b = arguments, offsetLeft = _b[0], offsetTop = _b[1], offsetRight = _b[2], offsetBottom = _b[3];
        this.left += offsetLeft;
        this.top += offsetTop;
        this.right += offsetRight;
        this.bottom += offsetBottom;
    }
    return this;
};
Rect.prototype.shiftLeft = function () {
    var offset = arguments[0];
    this.left += offset;
    return this;
};
Rect.prototype.shiftTop = function () {
    var offset = arguments[0];
    this.top += offset;
    return this;
};
Rect.prototype.shiftRight = function () {
    var offset = arguments[0];
    this.right += offset;
    return this;
};
Rect.prototype.shiftBottom = function () {
    var offset = arguments[0];
    this.bottom += offset;
    return this;
};
Rect.prototype.shiftHorizontal = function () {
    if (arguments.length === 1) {
        var offset = arguments[0];
        this.left += offset;
        this.right += offset;
    }
    else {
        var _a = arguments, offsetLeft = _a[0], offsetRight = _a[1];
        this.left += offsetLeft;
        this.right += offsetRight;
    }
    return this;
};
Rect.prototype.shiftVertical = function () {
    if (arguments.length === 1) {
        var offset = arguments[0];
        this.top += offset;
        this.bottom += offset;
    }
    else {
        var _a = arguments, offsetTop = _a[0], offsetBottom = _a[1];
        this.top += offsetTop;
        this.bottom += offsetBottom;
    }
    return this;
};
Rect.prototype.shiftTopLeft = function () {
    if (arguments.length === 1) {
        var offset = arguments[0];
        this.left += offset;
        this.top += offset;
    }
    else {
        var _a = arguments, offsetLeft = _a[0], offsetTop = _a[1];
        this.left += offsetLeft;
        this.top += offsetTop;
    }
    return this;
};
Rect.prototype.shiftTopRight = function () {
    if (arguments.length === 1) {
        var offset = arguments[0];
        this.right += offset;
        this.top += offset;
    }
    else {
        var _a = arguments, offsetRight = _a[0], offsetTop = _a[1];
        this.right += offsetRight;
        this.top += offsetTop;
    }
    return this;
};
Rect.prototype.shiftBottomLeft = function () {
    if (arguments.length === 1) {
        var offset = arguments[0];
        this.left += offset;
        this.bottom += offset;
    }
    else {
        var _a = arguments, offsetLeft = _a[0], offsetBottom = _a[1];
        this.left += offsetLeft;
        this.bottom += offsetBottom;
    }
    return this;
};
Rect.prototype.shiftBottomRight = function () {
    if (arguments.length === 1) {
        var offset = arguments[0];
        this.right += offset;
        this.bottom += offset;
    }
    else {
        var _a = arguments, offsetRight = _a[0], offsetBottom = _a[1];
        this.right += offsetRight;
        this.bottom += offsetBottom;
    }
    return this;
};
Rect.prototype.multiply = function () {
    if (arguments.length === 1) {
        var multiplier = arguments[0];
        this.left *= multiplier;
        this.top *= multiplier;
        this.right *= multiplier;
        this.bottom *= multiplier;
    }
    else {
        var _a = arguments, multiplierHorizontal = _a[0], multiplierVertical = _a[1];
        this.left *= multiplierHorizontal;
        this.top *= multiplierVertical;
        this.right *= multiplierHorizontal;
        this.bottom *= multiplierVertical;
    }
    return this;
};
Rect.prototype.multiplyHorizontal = function () {
    var multiplier = arguments[0];
    this.left *= multiplier;
    this.right *= multiplier;
    return this;
};
Rect.prototype.multiplyVertical = function () {
    var multiplier = arguments[0];
    this.top *= multiplier;
    this.bottom *= multiplier;
    return this;
};
Rect.prototype.clamp = function () {
    if (arguments.length === 1) {
        var rect = arguments[0];
        this.left = utils.clamp(this.left, rect.left, rect.right);
        this.top = utils.clamp(this.top, rect.top, rect.bottom);
        this.right = utils.clamp(this.right, rect.left, rect.right);
        this.bottom = utils.clamp(this.bottom, rect.top, rect.bottom);
    }
    else if (arguments.length === 2) {
        if (typeof arguments[0] === "object") {
            var _a = arguments, rangeHorizontal = _a[0], rangeVertical = _a[1];
            this.left = utils.clamp(this.left, rangeHorizontal);
            this.top = utils.clamp(this.top, rangeVertical);
            this.right = utils.clamp(this.right, rangeHorizontal);
            this.bottom = utils.clamp(this.bottom, rangeVertical);
        }
        else {
            var _b = arguments, min = _b[0], max = _b[1];
            this.left = utils.clamp(this.left, min, max);
            this.top = utils.clamp(this.top, min, max);
            this.right = utils.clamp(this.right, min, max);
            this.bottom = utils.clamp(this.bottom, min, max);
        }
    }
    else if (arguments.length === 4) {
        if (typeof arguments[0] === "object") {
            var _c = arguments, rangeLeft = _c[0], rangeTop = _c[1], rangeRight = _c[2], rangeBottom = _c[3];
            this.left = utils.clamp(this.left, rangeLeft);
            this.top = utils.clamp(this.top, rangeTop);
            this.right = utils.clamp(this.right, rangeRight);
            this.bottom = utils.clamp(this.bottom, rangeBottom);
        }
        else {
            var _d = arguments, minHorizontal = _d[0], maxHorizontal = _d[1], minVertical = _d[2], maxVertical = _d[3];
            this.left = utils.clamp(this.left, minHorizontal, maxHorizontal);
            this.top = utils.clamp(this.top, minVertical, maxVertical);
            this.right = utils.clamp(this.right, minHorizontal, maxHorizontal);
            this.bottom = utils.clamp(this.bottom, minVertical, maxVertical);
        }
    }
    else {
        var _e = arguments, minLeft = _e[0], maxLeft = _e[1], minTop = _e[2], maxTop = _e[3], minRight = _e[4], maxRight = _e[5], minBottom = _e[6], maxBottom = _e[7];
        this.left = utils.clamp(this.left, minLeft, maxLeft);
        this.top = utils.clamp(this.top, minTop, maxTop);
        this.right = utils.clamp(this.right, minRight, maxRight);
        this.bottom = utils.clamp(this.bottom, minBottom, maxBottom);
    }
    return this;
};
Rect.prototype.clampLeft = function () {
    if (arguments.length === 1) {
        var range = arguments[0];
        this.left = utils.clamp(this.left, range);
    }
    else {
        var _a = arguments, min = _a[0], max = _a[1];
        this.left = utils.clamp(this.left, min, max);
    }
    return this;
};
Rect.prototype.clampTop = function () {
    if (arguments.length === 1) {
        var range = arguments[0];
        this.top = utils.clamp(this.top, range);
    }
    else {
        var _a = arguments, min = _a[0], max = _a[1];
        this.top = utils.clamp(this.top, min, max);
    }
    return this;
};
Rect.prototype.clampRight = function () {
    if (arguments.length === 1) {
        var range = arguments[0];
        this.right = utils.clamp(this.right, range);
    }
    else {
        var _a = arguments, min = _a[0], max = _a[1];
        this.right = utils.clamp(this.right, min, max);
    }
    return this;
};
Rect.prototype.clampBottom = function () {
    if (arguments.length === 1) {
        var range = arguments[0];
        this.bottom = utils.clamp(this.bottom, range);
    }
    else {
        var _a = arguments, min = _a[0], max = _a[1];
        this.bottom = utils.clamp(this.bottom, min, max);
    }
    return this;
};
Rect.prototype.clampHorizontal = function () {
    if (arguments.length === 1) {
        var range = arguments[0];
        this.left = utils.clamp(this.left, range);
        this.right = utils.clamp(this.right, range);
    }
    else {
        var _a = arguments, min = _a[0], max = _a[1];
        this.left = utils.clamp(this.left, min, max);
        this.right = utils.clamp(this.right, min, max);
    }
    return this;
};
Rect.prototype.clampVertical = function () {
    if (arguments.length === 1) {
        var range = arguments[0];
        this.top = utils.clamp(this.top, range);
        this.bottom = utils.clamp(this.bottom, range);
    }
    else {
        var _a = arguments, min = _a[0], max = _a[1];
        this.top = utils.clamp(this.top, min, max);
        this.bottom = utils.clamp(this.bottom, min, max);
    }
    return this;
};
Rect.prototype.clampTopLeft = function () {
    if (arguments.length === 1) {
        var range = arguments[0];
        this.left = utils.clamp(this.left, range);
        this.top = utils.clamp(this.top, range);
    }
    else {
        var _a = arguments, min = _a[0], max = _a[1];
        this.left = utils.clamp(this.left, min, max);
        this.top = utils.clamp(this.top, min, max);
    }
    return this;
};
Rect.prototype.clampTopRight = function () {
    if (arguments.length === 1) {
        var range = arguments[0];
        this.right = utils.clamp(this.right, range);
        this.top = utils.clamp(this.top, range);
    }
    else {
        var _a = arguments, min = _a[0], max = _a[1];
        this.right = utils.clamp(this.right, min, max);
        this.top = utils.clamp(this.top, min, max);
    }
    return this;
};
Rect.prototype.clampBottomLeft = function () {
    if (arguments.length === 1) {
        var range = arguments[0];
        this.left = utils.clamp(this.left, range);
        this.bottom = utils.clamp(this.bottom, range);
    }
    else {
        var _a = arguments, min = _a[0], max = _a[1];
        this.left = utils.clamp(this.left, min, max);
        this.bottom = utils.clamp(this.bottom, min, max);
    }
    return this;
};
Rect.prototype.clampBottomRight = function () {
    if (arguments.length === 1) {
        var range = arguments[0];
        this.right = utils.clamp(this.right, range);
        this.bottom = utils.clamp(this.bottom, range);
    }
    else {
        var _a = arguments, min = _a[0], max = _a[1];
        this.right = utils.clamp(this.right, min, max);
        this.bottom = utils.clamp(this.bottom, min, max);
    }
    return this;
};
Rect.prototype.round = function () {
    if (arguments.length === 1) {
        var fractionDigits = arguments[0];
        this.left = utils.round(this.left, fractionDigits);
        this.top = utils.round(this.top, fractionDigits);
        this.right = utils.round(this.right, fractionDigits);
        this.bottom = utils.round(this.bottom, fractionDigits);
    }
    else {
        var _a = arguments, fractionDigitsHorizontal = _a[0], fractionDigitsVertical = _a[1];
        this.left = utils.round(this.left, fractionDigitsHorizontal);
        this.top = utils.round(this.top, fractionDigitsVertical);
        this.right = utils.round(this.right, fractionDigitsHorizontal);
        this.bottom = utils.round(this.bottom, fractionDigitsVertical);
    }
    return this;
};
Rect.prototype.roundHorizontal = function () {
    var fractionDigits = arguments[0];
    this.left = utils.round(this.left, fractionDigits);
    this.right = utils.round(this.right, fractionDigits);
    return this;
};
Rect.prototype.roundVertical = function () {
    var fractionDigits = arguments[0];
    this.top = utils.round(this.top, fractionDigits);
    this.bottom = utils.round(this.bottom, fractionDigits);
    return this;
};
Rect.prototype.normalize = function () {
    // (): Rect
    if (this.left > this.right) {
        var temp = this.left;
        this.left = this.right;
        this.right = temp;
    }
    if (this.top > this.bottom) {
        var temp = this.top;
        this.top = this.bottom;
        this.bottom = temp;
    }
    return this;
};
Rect.prototype.topLeft = function () {
    if (arguments.length === 0) {
        // (): IPoint
        return new point_1.Point(this.left, this.top);
    }
    else if (arguments.length === 1) {
        var topLeft = arguments[0];
        this.left = topLeft.x;
        this.top = topLeft.y;
        return this;
    }
    else {
        var _a = arguments, left = _a[0], top_2 = _a[1];
        this.left = left;
        this.top = top_2;
        return this;
    }
};
Rect.prototype.topRight = function () {
    if (arguments.length === 0) {
        // (): IPoint
        return new point_1.Point(this.right, this.top);
    }
    else if (arguments.length === 1) {
        var topLeft = arguments[0];
        this.right = topLeft.x;
        this.top = topLeft.y;
        return this;
    }
    else {
        var _a = arguments, right = _a[0], top_3 = _a[1];
        this.right = right;
        this.top = top_3;
        return this;
    }
};
Rect.prototype.bottomLeft = function () {
    if (arguments.length === 0) {
        // (): IPoint
        return new point_1.Point(this.left, this.bottom);
    }
    else if (arguments.length === 1) {
        var bottomLeft = arguments[0];
        this.left = bottomLeft.x;
        this.bottom = bottomLeft.y;
        return this;
    }
    else {
        var _a = arguments, left = _a[0], bottom = _a[1];
        this.left = left;
        this.bottom = bottom;
        return this;
    }
};
Rect.prototype.bottomRight = function () {
    if (arguments.length === 0) {
        // (): IPoint
        return new point_1.Point(this.right, this.bottom);
    }
    else if (arguments.length === 1) {
        var bottomLeft = arguments[0];
        this.right = bottomLeft.x;
        this.bottom = bottomLeft.y;
        return this;
    }
    else {
        var _a = arguments, right = _a[0], bottom = _a[1];
        this.right = right;
        this.bottom = bottom;
        return this;
    }
};
Rect.prototype.width = function () {
    if (arguments.length === 0) {
        // (): number
        return this.right - this.left;
    }
    else {
        var width = arguments[0];
        var difference = width - (this.right - this.left);
        this.left -= difference / 2;
        this.right += difference / 2;
        return this;
    }
};
Rect.prototype.height = function () {
    if (arguments.length === 0) {
        // (): number
        return this.right - this.left;
    }
    else {
        var height = arguments[0];
        var difference = height - (this.bottom - this.top);
        this.top -= difference / 2;
        this.bottom += difference / 2;
        return this;
    }
};
Rect.prototype.contains = function () {
    if ("x" in arguments[0]) {
        var point = arguments[0];
        var containsPointX = this.left <= point.x && this.right >= point.x;
        var containsPointY = this.top <= point.y && this.bottom >= point.y;
        return containsPointX && containsPointY;
    }
    else {
        var rect = arguments[0];
        var containsRectLeft = this.left <= rect.left && this.right >= rect.left;
        var containsRectTop = this.top <= rect.top && this.bottom >= rect.top;
        var containsRectRight = this.left <= rect.right && this.right >= rect.right;
        var containsRectBottom = this.top <= rect.bottom && this.bottom >= rect.bottom;
        return containsRectLeft && containsRectTop && containsRectRight && containsRectBottom;
    }
};
//# sourceMappingURL=rect.js.map