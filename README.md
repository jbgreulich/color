# color

A random HSL color value generator and color manipulation library. Calculate complementary and analagous HSL color values.

The following conversions are included:

- HSL to Hex
- HSL to HSV
- HSL to RGB
- HSV to HSL
- RGB to Hex

## Installation
```
$ npm i @jgreulich/color
```

## Usage
```
import color from 'color';

```
## Methods


### `generateHSLColorArray`
Generate a random HSL color as an array: [h, s, l].

```haskell
generateHSLColorArray :: () -> [Number, Number, Number]
```

```js
color.generateHSLColorArray() // [250, 100, 50]
```

### `hsl2hex`

Return a Hex color from an HSL color.

```haskell
hsl2hex :: ([Number, Number, Number]) -> String
```

```js
color.hsl2hex([250, 100, 50]) // #2A00FF
```

### `hsl2hsv`

Return an HSV color from an HSL color.

```haskell
hsl2hsv :: (Number, Number, Number) -> [Number, Number, Number]
```

```js
color.hsl2hsv(250, 100, 50) // [250, 100, 100]
```

### `hsl2rgb`

Return an RGB color from an HSL color.

```haskell
hsl2rgb :: ([Number, Number, Number]) -> [Number, Number, Number]
```

```js
color.hsl2rgb(250, 100, 50) // [42, 0, 255]
```


### `hsv2hsl`

Return an HSL color from an HSV color.

```haskell
hsv2hsl :: (Number, Number, Number) -> [Number, Number, Number]
```

```js
color.hsv2hsl(250, 100, 50) // [250, 100, 25]
```

### `rgb2hex`

Return a Hex color from an RGB color.

```haskell
rgb2hex :: (Number, Number, Number) -> String
```

```js
color.rgb2hex(42, 0, 255) // #2A00FF
```

### `compColor`

Calculate a complementary Hex color from an HSL color.

```haskell
compColor :: ([Number, Number, Number]) -> String
```

```js
color.compColor([250, 100, 50]) // #2A00FF
```

### `compColorInverse`

Calculate an inverse light value complementary Hex color from an HSL color.

```haskell
compColorInverse :: ([Number, Number, Number]) -> String
```

```js
color.compColorInverse([250, 100, 50]) // #1E00B3
```

### `darkColor`

Calculate an inverse light value Hex color from an HSL color (dark).

```haskell
darkColor :: ([Number, Number, Number]) -> String
```

```js
color.darkColor([250, 100, 50]) // #1E00B3
```

### `lightColor`

Calculate a lighter value Hex color from an HSL color.

```haskell
lightColor :: ([Number, Number, Number]) -> String
```

```js
color.lightColor([250, 100, 50]) // #4019FF
```

## License

Copyright 2019, Jessica Greulich. Licensed under the [ISC License](https://opensource.org/licenses/ISC).

## Acknowledgments

Inspired by [Adobe Color](https://color.adobe.com/create).