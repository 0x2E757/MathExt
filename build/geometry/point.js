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
class Point {
    constructor(...args) {
        if (args.length === 1 && typeof args[0] === "object") {
            const [point] = args;
            this.x = point.x;
            this.y = point.y;
            this.z = point.z;
        }
        else {
            const [x, y, z] = args;
            this.x = x || 0;
            this.y = y || 0;
            this.z = z || 0;
        }
    }
}
exports.Point = Point;
Point.prototype.shift = function (...args) {
    if (args.length === 1) {
        if (typeof args[0] === "object") {
            const [offset] = args;
            this.x += offset.x;
            this.y += offset.y;
            this.z += offset.z;
        }
        else {
            const [offsetX] = args;
            this.x += offsetX;
        }
    }
    else if (args.length === 2) {
        const [offsetX, offsetY] = args;
        this.x += offsetX;
        this.y += offsetY;
    }
    else {
        const [offsetX, offsetY, offsetZ] = args;
        this.x += offsetX;
        this.y += offsetY;
        this.z += offsetZ;
    }
    return this;
};
Point.prototype.shiftX = function (...args) {
    const [offset] = args;
    this.x += offset;
    return this;
};
Point.prototype.shiftY = function (...args) {
    const [offset] = args;
    this.y += offset;
    return this;
};
Point.prototype.shiftZ = function (...args) {
    const [offset] = args;
    this.z += offset;
    return this;
};
Point.prototype.multiply = function (...args) {
    if (args.length === 1) {
        const [multiplierX] = args;
        this.x *= multiplierX;
    }
    else if (args.length === 2) {
        const [multiplierX, multiplierY] = args;
        this.x *= multiplierX;
        this.y *= multiplierY;
    }
    else {
        const [multiplierX, multiplierY, multiplierZ] = args;
        this.x *= multiplierX;
        this.y *= multiplierY;
        this.z *= multiplierZ;
    }
    return this;
};
Point.prototype.multiplyX = function (...args) {
    const [multiplier] = args;
    this.x *= multiplier;
    return this;
};
Point.prototype.multiplyY = function (...args) {
    const [multiplier] = args;
    this.y *= multiplier;
    return this;
};
Point.prototype.multiplyZ = function (...args) {
    const [multiplier] = args;
    this.z *= multiplier;
    return this;
};
Point.prototype.clamp = function (...args) {
    if (args.length === 1) {
        const [range] = args;
        this.x = utils.clamp(this.x, range);
        this.y = utils.clamp(this.y, range);
        this.z = utils.clamp(this.z, range);
    }
    else if (args.length === 2) {
        const [min, max] = args;
        this.x = utils.clamp(this.x, min, max);
        this.y = utils.clamp(this.y, min, max);
        this.z = utils.clamp(this.z, min, max);
    }
    else if (args.length === 3) {
        const [rangeX, rangeY, rangeZ] = args;
        this.x = utils.clamp(this.x, rangeX);
        this.y = utils.clamp(this.y, rangeY);
        this.z = utils.clamp(this.z, rangeZ);
    }
    else {
        const [minX, maxX, minY, maxY, minZ, maxZ] = args;
        this.x = utils.clamp(this.x, minX, maxX);
        this.y = utils.clamp(this.y, minY, maxY);
        this.z = utils.clamp(this.z, minZ, maxZ);
    }
    return this;
};
Point.prototype.clampX = function (...args) {
    if (args.length === 1) {
        const [range] = args;
        this.x = utils.clamp(this.x, range);
    }
    else {
        const [min, max] = args;
        this.x = utils.clamp(this.x, min, max);
    }
    return this;
};
Point.prototype.clampY = function (...args) {
    if (args.length === 1) {
        const [range] = args;
        this.y = utils.clamp(this.y, range);
    }
    else {
        const [min, max] = args;
        this.y = utils.clamp(this.y, min, max);
    }
    return this;
};
Point.prototype.clampZ = function (...args) {
    if (args.length === 1) {
        const [range] = args;
        this.z = utils.clamp(this.z, range);
    }
    else {
        const [min, max] = args;
        this.z = utils.clamp(this.z, min, max);
    }
    return this;
};
Point.prototype.round = function (...args) {
    if (args.length === 1) {
        const [fractionDigits] = args;
        this.x = utils.round(this.x, fractionDigits);
        this.y = utils.round(this.y, fractionDigits);
        this.z = utils.round(this.z, fractionDigits);
    }
    else {
        const [fractionDigitsX, fractionDigitsY, fractionDigitsZ] = args;
        this.x = utils.round(this.x, fractionDigitsX);
        this.y = utils.round(this.y, fractionDigitsY);
        this.z = utils.round(this.z, fractionDigitsZ);
    }
    return this;
};
Point.prototype.roundX = function (...args) {
    const [fractionDigits] = args;
    this.x = utils.round(this.x, fractionDigits);
    return this;
};
Point.prototype.roundY = function (...args) {
    const [fractionDigits] = args;
    this.y = utils.round(this.y, fractionDigits);
    return this;
};
Point.prototype.roundZ = function (...args) {
    const [fractionDigits] = args;
    this.z = utils.round(this.z, fractionDigits);
    return this;
};
//# sourceMappingURL=point.js.map