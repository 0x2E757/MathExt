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
var Point = /** @class */ (function () {
    function Point() {
        if (arguments.length === 1 && typeof arguments[0] === "object") {
            var point = arguments[0];
            this.x = point.x;
            this.y = point.y;
            this.z = point.z;
        }
        else {
            var _a = arguments, x = _a[0], y = _a[1], z = _a[2];
            this.x = x || 0;
            this.y = y || 0;
            this.z = z || 0;
        }
    }
    return Point;
}());
exports.Point = Point;
Point.prototype.shift = function () {
    if (arguments.length === 1) {
        if (typeof arguments[0] === "object") {
            var offset = arguments[0];
            this.x += offset.x;
            this.y += offset.y;
            this.z += offset.z;
        }
        else {
            var offsetX = arguments[0];
            this.x += offsetX;
        }
    }
    else if (arguments.length === 2) {
        var _a = arguments, offsetX = _a[0], offsetY = _a[1];
        this.x += offsetX;
        this.y += offsetY;
    }
    else {
        var _b = arguments, offsetX = _b[0], offsetY = _b[1], offsetZ = _b[2];
        this.x += offsetX;
        this.y += offsetY;
        this.z += offsetZ;
    }
    return this;
};
Point.prototype.shiftX = function () {
    var offset = arguments[0];
    this.x += offset;
    return this;
};
Point.prototype.shiftY = function () {
    var offset = arguments[0];
    this.y += offset;
    return this;
};
Point.prototype.shiftZ = function () {
    var offset = arguments[0];
    this.z += offset;
    return this;
};
Point.prototype.multiply = function () {
    if (arguments.length === 1) {
        var multiplierX = arguments[0];
        this.x *= multiplierX;
    }
    else if (arguments.length === 2) {
        var _a = arguments, multiplierX = _a[0], multiplierY = _a[1];
        this.x *= multiplierX;
        this.y *= multiplierY;
    }
    else {
        var _b = arguments, multiplierX = _b[0], multiplierY = _b[1], multiplierZ = _b[2];
        this.x *= multiplierX;
        this.y *= multiplierY;
        this.z *= multiplierZ;
    }
    return this;
};
Point.prototype.multiplyX = function () {
    var multiplier = arguments[0];
    this.x *= multiplier;
    return this;
};
Point.prototype.multiplyY = function () {
    var multiplier = arguments[0];
    this.y *= multiplier;
    return this;
};
Point.prototype.multiplyZ = function () {
    var multiplier = arguments[0];
    this.z *= multiplier;
    return this;
};
Point.prototype.clamp = function () {
    if (arguments.length === 1) {
        var range = arguments[0];
        this.x = utils.clamp(this.x, range);
        this.y = utils.clamp(this.y, range);
        this.z = utils.clamp(this.z, range);
    }
    else if (arguments.length === 2) {
        var _a = arguments, min = _a[0], max = _a[1];
        this.x = utils.clamp(this.x, min, max);
        this.y = utils.clamp(this.y, min, max);
        this.z = utils.clamp(this.z, min, max);
    }
    else if (arguments.length === 3) {
        var _b = arguments, rangeX = _b[0], rangeY = _b[1], rangeZ = _b[2];
        this.x = utils.clamp(this.x, rangeX);
        this.y = utils.clamp(this.y, rangeY);
        this.z = utils.clamp(this.z, rangeZ);
    }
    else {
        var _c = arguments, minX = _c[0], maxX = _c[1], minY = _c[2], maxY = _c[3], minZ = _c[4], maxZ = _c[5];
        this.x = utils.clamp(this.x, minX, maxX);
        this.y = utils.clamp(this.y, minY, maxY);
        this.z = utils.clamp(this.z, minZ, maxZ);
    }
    return this;
};
Point.prototype.clampX = function () {
    if (arguments.length === 1) {
        var range = arguments[0];
        this.x = utils.clamp(this.x, range);
    }
    else {
        var _a = arguments, min = _a[0], max = _a[1];
        this.x = utils.clamp(this.x, min, max);
    }
    return this;
};
Point.prototype.clampY = function () {
    if (arguments.length === 1) {
        var range = arguments[0];
        this.y = utils.clamp(this.y, range);
    }
    else {
        var _a = arguments, min = _a[0], max = _a[1];
        this.y = utils.clamp(this.y, min, max);
    }
    return this;
};
Point.prototype.clampZ = function () {
    if (arguments.length === 1) {
        var range = arguments[0];
        this.z = utils.clamp(this.z, range);
    }
    else {
        var _a = arguments, min = _a[0], max = _a[1];
        this.z = utils.clamp(this.z, min, max);
    }
    return this;
};
Point.prototype.round = function () {
    if (arguments.length === 1) {
        var fractionDigits = arguments[0];
        this.x = utils.round(this.x, fractionDigits);
        this.y = utils.round(this.y, fractionDigits);
        this.z = utils.round(this.z, fractionDigits);
    }
    else {
        var _a = arguments, fractionDigitsX = _a[0], fractionDigitsY = _a[1], fractionDigitsZ = _a[2];
        this.x = utils.round(this.x, fractionDigitsX);
        this.y = utils.round(this.y, fractionDigitsY);
        this.z = utils.round(this.z, fractionDigitsZ);
    }
    return this;
};
Point.prototype.roundX = function () {
    var fractionDigits = arguments[0];
    this.x = utils.round(this.x, fractionDigits);
    return this;
};
Point.prototype.roundY = function () {
    var fractionDigits = arguments[0];
    this.y = utils.round(this.y, fractionDigits);
    return this;
};
Point.prototype.roundZ = function () {
    var fractionDigits = arguments[0];
    this.z = utils.round(this.z, fractionDigits);
    return this;
};
Point.prototype.distance = function () {
    var point = arguments[0];
    return Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2) + Math.pow(this.z - point.z, 2));
};
//# sourceMappingURL=point.js.map