"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils = __importStar(require("../utils"));
class Range {
    constructor(...args) {
        if (args.length === 1) {
            const [range] = args;
            this.start = range.start;
            this.end = range.end;
        }
        else {
            const [start, end] = args;
            this.start = start;
            this.end = end;
        }
    }
}
exports.Range = Range;
Range.prototype.shift = function (...args) {
    if (args.length === 1) {
        const [offset] = args;
        this.start += offset;
        this.end += offset;
    }
    else {
        const [offsetStart, offsetEnd] = args;
        this.start += offsetStart;
        this.end += offsetEnd;
    }
    return this;
};
Range.prototype.multiply = function (...args) {
    if (args.length === 1) {
        const [multiplier] = args;
        this.start *= multiplier;
        this.end *= multiplier;
    }
    else {
        const [multiplierStart, multiplierEnd] = args;
        this.start *= multiplierStart;
        this.end *= multiplierEnd;
    }
    return this;
};
Range.prototype.clamp = function (...args) {
    if (args.length === 1) {
        const [range] = args;
        this.start = utils.clamp(this.start, range);
        this.end = utils.clamp(this.end, range);
    }
    else if (args.length === 2) {
        if (typeof args[0] === "object") {
            const [rangeStart, rangeEnd] = args;
            this.start = utils.clamp(this.start, rangeStart);
            this.end = utils.clamp(this.end, rangeEnd);
        }
        else {
            const [min, max] = args;
            this.start = utils.clamp(this.start, min, max);
            this.end = utils.clamp(this.end, min, max);
        }
    }
    else {
        const [minStart, maxStart, minEnd, maxEnd] = args;
        this.start = utils.clamp(this.start, minStart, maxStart);
        this.end = utils.clamp(this.end, minEnd, maxEnd);
    }
    return this;
};
Range.prototype.clampStart = function (...args) {
    if (args.length === 1) {
        const [range] = args;
        this.start = utils.clamp(this.start, range);
    }
    else {
        const [min, max] = args;
        this.start = utils.clamp(this.start, min, max);
    }
    return this;
};
Range.prototype.clampEnd = function (...args) {
    if (args.length === 1) {
        const [range] = args;
        this.end = utils.clamp(this.end, range);
    }
    else {
        const [min, max] = args;
        this.end = utils.clamp(this.end, min, max);
    }
    return this;
};
Range.prototype.round = function (...args) {
    if (args.length === 1) {
        const [fractionDigits] = args;
        this.start = utils.round(this.start, fractionDigits);
        this.end = utils.round(this.end, fractionDigits);
    }
    else {
        const [fractionDigitsStart, fractionDigitsEnd] = args;
        this.start = utils.round(this.start, fractionDigitsStart);
        this.end = utils.round(this.end, fractionDigitsEnd);
    }
    return this;
};
Range.prototype.roundStart = function (...args) {
    const [fractionDigits] = args;
    this.start = utils.round(this.start, fractionDigits);
    return this;
};
Range.prototype.roundEnd = function (...args) {
    const [fractionDigits] = args;
    this.end = utils.round(this.end, fractionDigits);
    return this;
};
Range.prototype.normalize = function () {
    // (): Range
    if (this.start > this.end) {
        const temp = this.start;
        this.start = this.end;
        this.end = temp;
    }
    return this;
};
Range.prototype.contains = function (...args) {
    if (typeof args[0] === "object") {
        const [range] = args;
        return range.start >= this.start && range.end <= this.end;
    }
    else {
        const [value] = args;
        return value >= this.start && value <= this.end;
    }
};
//# sourceMappingURL=range.js.map