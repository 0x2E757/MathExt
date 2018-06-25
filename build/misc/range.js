"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var utils = __importStar(require("../utils"));
var Range = /** @class */ (function () {
    function Range() {
        if (arguments.length === 1) {
            var range = arguments[0];
            this.start = range.start;
            this.end = range.end;
        }
        else {
            var _a = arguments, start = _a[0], end = _a[1];
            this.start = start;
            this.end = end;
        }
    }
    return Range;
}());
exports.Range = Range;
Range.prototype.shift = function () {
    if (arguments.length === 1) {
        var offset = arguments[0];
        this.start += offset;
        this.end += offset;
    }
    else {
        var _a = arguments, offsetStart = _a[0], offsetEnd = _a[1];
        this.start += offsetStart;
        this.end += offsetEnd;
    }
    return this;
};
Range.prototype.multiply = function () {
    if (arguments.length === 1) {
        var multiplier = arguments[0];
        this.start *= multiplier;
        this.end *= multiplier;
    }
    else {
        var _a = arguments, multiplierStart = _a[0], multiplierEnd = _a[1];
        this.start *= multiplierStart;
        this.end *= multiplierEnd;
    }
    return this;
};
Range.prototype.clamp = function () {
    if (arguments.length === 1) {
        var range = arguments[0];
        this.start = utils.clamp(this.start, range);
        this.end = utils.clamp(this.end, range);
    }
    else if (arguments.length === 2) {
        if (typeof arguments[0] === "object") {
            var _a = arguments, rangeStart = _a[0], rangeEnd = _a[1];
            this.start = utils.clamp(this.start, rangeStart);
            this.end = utils.clamp(this.end, rangeEnd);
        }
        else {
            var _b = arguments, min = _b[0], max = _b[1];
            this.start = utils.clamp(this.start, min, max);
            this.end = utils.clamp(this.end, min, max);
        }
    }
    else {
        var _c = arguments, minStart = _c[0], maxStart = _c[1], minEnd = _c[2], maxEnd = _c[3];
        this.start = utils.clamp(this.start, minStart, maxStart);
        this.end = utils.clamp(this.end, minEnd, maxEnd);
    }
    return this;
};
Range.prototype.clampStart = function () {
    if (arguments.length === 1) {
        var range = arguments[0];
        this.start = utils.clamp(this.start, range);
    }
    else {
        var _a = arguments, min = _a[0], max = _a[1];
        this.start = utils.clamp(this.start, min, max);
    }
    return this;
};
Range.prototype.clampEnd = function () {
    if (arguments.length === 1) {
        var range = arguments[0];
        this.end = utils.clamp(this.end, range);
    }
    else {
        var _a = arguments, min = _a[0], max = _a[1];
        this.end = utils.clamp(this.end, min, max);
    }
    return this;
};
Range.prototype.round = function () {
    if (arguments.length === 1) {
        var fractionDigits = arguments[0];
        this.start = utils.round(this.start, fractionDigits);
        this.end = utils.round(this.end, fractionDigits);
    }
    else {
        var _a = arguments, fractionDigitsStart = _a[0], fractionDigitsEnd = _a[1];
        this.start = utils.round(this.start, fractionDigitsStart);
        this.end = utils.round(this.end, fractionDigitsEnd);
    }
    return this;
};
Range.prototype.roundStart = function () {
    var fractionDigits = arguments[0];
    this.start = utils.round(this.start, fractionDigits);
    return this;
};
Range.prototype.roundEnd = function () {
    var fractionDigits = arguments[0];
    this.end = utils.round(this.end, fractionDigits);
    return this;
};
Range.prototype.normalize = function () {
    // (): Range
    if (this.start > this.end) {
        var temp = this.start;
        this.start = this.end;
        this.end = temp;
    }
    return this;
};
Range.prototype.contains = function () {
    if (typeof arguments[0] === "object") {
        var range = arguments[0];
        return range.start >= this.start && range.end <= this.end;
    }
    else {
        var value = arguments[0];
        return value >= this.start && value <= this.end;
    }
};
//# sourceMappingURL=range.js.map