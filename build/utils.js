"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clamp = (...args) => {
    if (args.length === 2) {
        const [value, range] = args;
        return value < range.start ? range.start : value > range.end ? range.end : value;
    }
    else {
        const [value, min, max] = args;
        return value < min ? min : value > max ? max : value;
    }
};
exports.round = (...args) => {
    const [value, fractionDigits] = args;
    return Number(value.toFixed(fractionDigits));
};
exports.random = (...args) => {
    if (args.length === 1) {
        const [range] = args;
        return Math.random() * (range.end - range.start) + range.start;
    }
    else if (args.length === 2) {
        if (typeof args[0] === "object") {
            const [range, integer] = args;
            if (integer) {
                return Math.floor(Math.random() * (range.end - range.start)) + range.start;
            }
            else {
                return Math.random() * (range.end - range.start) + range.start;
            }
        }
        else {
            const [min, max] = args;
            return Math.random() * (max - min) + min;
        }
    }
    else {
        const [min, max, integer] = args;
        if (integer) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        else {
            return Math.random() * (max - min) + min;
        }
    }
};
//# sourceMappingURL=utils.js.map