"use strict";
exports.__esModule = true;
exports.clamp = function () {
    if (arguments.length === 2) {
        var _a = arguments, value = _a[0], range = _a[1];
        return value < range.start ? range.start : value > range.end ? range.end : value;
    }
    else {
        var _b = arguments, value = _b[0], min = _b[1], max = _b[2];
        return value < min ? min : value > max ? max : value;
    }
};
exports.round = function () {
    var _a = arguments, value = _a[0], fractionDigits = _a[1];
    return Number(value.toFixed(fractionDigits));
};
exports.random = function () {
    if (arguments.length === 1) {
        var range = arguments[0];
        return Math.random() * (range.end - range.start) + range.start;
    }
    else if (arguments.length === 2) {
        if (typeof arguments[0] === "object") {
            var _a = arguments, range = _a[0], integer = _a[1];
            if (integer) {
                return Math.floor(Math.random() * (range.end - range.start)) + range.start;
            }
            else {
                return Math.random() * (range.end - range.start) + range.start;
            }
        }
        else {
            var _b = arguments, min = _b[0], max = _b[1];
            return Math.random() * (max - min) + min;
        }
    }
    else {
        var _c = arguments, min = _c[0], max = _c[1], integer = _c[2];
        if (integer) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        else {
            return Math.random() * (max - min) + min;
        }
    }
};
//# sourceMappingURL=utils.js.map