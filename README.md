# MathExt

Library with useful math functions like `clamp` and `random` with parameters and simple geometry classes. Library mostly oriented to be used with any kind of simple graphics. Also class objects support chaining.

TypeScript code transpiled to ES3 JavaScript.

## Install

```bash
npm i @0x2e757/math-ext
```

## Usage

### How to import

```typescript
import PromiseExt from "@0x2e757/math-ext";
```

### Interfaces

```typescript
interface IRange {
    start: number;
    end: number;
}
```

```typescript
interface IPoint {
    x: number;
    y: number;
    z: number;
}
```

```typescript
interface IRect {
    left: number;
    top: number;
    right: number;
    bottom: number;
}
```

### Math functions

```typescript 
clamp = (value: number, min: number, max: number) => number
clamp = (value: number, range: IRange) => number
```

```typescript 
round = (value: number, fractionDigits: number) => number
```

```typescript 
random = (min: number, max: number) => number
random = (min: number, max: number, integer: boolean) => number
random = (range: IRange) => number
random = (range: IRange, integer: boolean) => number
```

### Range methods

```typescript
new Range(start: number, end: number) => Range
new Range(range: IRange) => Range
```

```typescript
shift = (offset: number) => Range
shift = (offsetStart: number, offsetEnd: number) => Range
```

```typescript
multiply = (multiplier: number) => Range
multiply = (multiplierStart: number, multiplierEnd: number) => Range
```

```typescript
clamp = (min: number, max: number) => Range
clamp = (minStart: number, maxStart: number, minEnd: number, maxEnd: number) => Range
clamp = (range: IRange) => Range
clamp = (rangeStart: IRange, rangeEnd: IRange) => Range
clampStart = (min: number, max: number) => Range
clampStart = (range: IRange) => Range
clampEnd = (min: number, max: number) => Range
clampEnd = (range: IRange) => Range
```

```typescript
round = (fractionDigits: number) => Range
round = (fractionDigitsStart: number, fractionDigitsEnd: number) => Range
roundStart = (fractionDigits: number) => Range
roundEnd = (fractionDigits: number) => Range
```

```typescript
normalize = () => Range
```

```typescript
contains = (value: number) => boolean
contains = (range: IRange) => boolean
```

### Point methods

```typescript
new Point() => Point
new Point(x: number) => Point
new Point(x: number, y: number) => Point
new Point(x: number, y: number, z: number) => Point
new Point(point: IPoint) => Point
```

```typescript
shift = (offsetX: number) => Point
shift = (offsetX: number, offsetY: number) => Point
shift = (offsetX: number, offsetY: number, offsetZ: number) => Point
shift = (point: IPoint) => Point
shiftX = (offset: number) => Point
shiftY = (offset: number) => Point
shiftZ = (offset: number) => Point
```

```typescript
multiply = (multiplierX: number) => Point
multiply = (multiplierX: number, multiplierY: number) => Point
multiply = (multiplierX: number, multiplierY: number, multiplierZ: number) => Point
multiplyX = (multiplier: number) => Point
multiplyY = (multiplier: number) => Point
multiplyZ = (multiplier: number) => Point
```

```typescript
clamp = (min: number, max: number) => Point
clamp = (minX: number, maxX: number, minY: number, maxY: number, minZ: number, maxZ: number) => Point
clamp = (range: IRange) => Point
clamp = (rangeX: IRange, rangeY: IRange, rangeZ: IRange) => Point
clampX = (min: number, max: number) => Point
clampX = (range: IRange) => Point
clampY = (min: number, max: number) => Point
clampY = (range: IRange) => Point
clampZ = (min: number, max: number) => Point
clampZ = (range: IRange) => Point
```

```typescript
round = (fractionDigits: number) => Point
round = (fractionDigitsX: number, fractionDigitsY: number, fractionDigitsZ: number) => Point
roundX = (fractionDigits: number) => Point
roundY = (fractionDigits: number) => Point
roundZ = (fractionDigits: number) => Point
```

```typescript
distance = (point: IPoint) => number
```

### Rect methods

```typescript
new Rect() => Rect
new Rect(left: number, top: number, right: number, bottom: number) => Rect
new Rect(topLeft: IPoint, bottomRight: IPoint) => Rect
new Rect(rect: IRect) => Rect
```

```typescript
shift = (offsetHorizontal: number, offsetVertical: number) => Rect
shift = (offsetLeft: number, offsetTop: number, offsetRight: number, offsetBottom: number) => Rect
shift = (offset: IPoint) => Rect
shiftLeft = (offset: number) => Rect
shiftTop = (offset: number) => Rect
shiftRight = (offset: number) => Rect
shiftBottom = (offset: number) => Rect
shiftHorizontal = (offset: number) => Rect
shiftHorizontal = (offsetLeft: number, offsetRight: number) => Rect
shiftVertical = (offset: number) => Rect
shiftVertical = (offsetTop: number, offsetBottom: number) => Rect
shiftTopLeft = (offset: IPoint) => Rect
shiftTopLeft = (offsetLeft: number, offsetTop: number) => Rect
shiftTopRight = (offset: IPoint) => Rect
shiftTopRight = (offsetRight: number, offsetTop: number) => Rect
shiftBottomLeft = (offset: IPoint) => Rect
shiftBottomLeft = (offsetLeft: number, offsetBottom: number) => Rect
shiftBottomRight = (offset: IPoint) => Rect
shiftBottomRight = (offsetRight: number, offsetBottom: number) => Rect
```

```typescript
multiply = (multiplier: number) => Rect
multiply = (multiplierHorizontal: number, multiplierVertical: number) => Rect
multiplyHorizontal = (multiplier: number) => Rect
multiplyVertical = (multiplier: number) => Rect
```

```typescript
clamp = (min: number, max: number) => Rect
clamp = (minHorizontal: number, maxHorizontal: number, minVertical: number, maxVertical: number) => Rect
clamp = (minLeft: number, maxLeft: number, minTop: number, maxTop: number, minRight: number, maxRight: number, minBottom: number, maxBottom: number) => Rect
clamp = (rect: IRect) => Rect
clamp = (rangeHorizontal: IRange, rangeVertical: IRange) => Rect
clamp = (rangeLeft: IRange, rangeTop: IRange, rangeRight: IRange, rangeBottom: IRange) => Rect
clampLeft = (min: number, max: number) => Rect
clampLeft = (range: IRange) => Rect
clampTop = (min: number, max: number) => Rect
clampTop = (range: IRange) => Rect
clampRight = (min: number, max: number) => Rect
clampRight = (range: IRange) => Rect
clampBottom = (min: number, max: number) => Rect
clampBottom = (range: IRange) => Rect
clampHorizontal = (min: number, max: number) => Rect
clampHorizontal = (range: IRange) => Rect
clampVertical = (min: number, max: number) => Rect
clampVertical = (range: IRange) => Rect
clampTopLeft = (min: number, max: number) => Rect
clampTopLeft = (range: IRange) => Rect
clampTopRight = (min: number, max: number) => Rect
clampTopRight = (range: IRange) => Rect
clampBottomLeft = (min: number, max: number) => Rect
clampBottomLeft = (range: IRange) => Rect
clampBottomRight = (min: number, max: number) => Rect
clampBottomRight = (range: IRange) => Rect
```

```typescript
round = (fractionDigits: number) => Rect
round = (fractionDigitsHorizontal: number, fractionDigitsVertical: number) => Rect
roundHorizontal = (fractionDigits: number) => Rect
roundVertical = (fractionDigits: number) => Rect
```

```typescript
normalize = () => Rect
```

```typescript
topLeft = () => IPoint
topLeft = (left: number, top: number) => Rect
topLeft = (topLeft: IPoint) => Rect
```

```typescript
topRight = () => IPoint
topRight = (right: number, top: number) => Rect
topRight = (topRight: IPoint) => Rect
```

```typescript
bottomLeft = () => IPoint
bottomLeft = (left: number, bottom: number) => Rect
bottomLeft = (bottomLeft: IPoint) => Rect
```

```typescript
bottomRight = () => IPoint
bottomRight = (right: number, bottom: number) => Rect
bottomRight = (bottomRight: IPoint) => Rect
```

```typescript
width = () => number
width = (width: number) => Rect
```

```typescript
height = () => number
height = (height: number) => Rect
```

```typescript
contains = (point: IPoint) => boolean
contains = (rect: IRect) => boolean
```