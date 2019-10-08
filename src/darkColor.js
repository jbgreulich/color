import hsl2hex from './hsl2hex';
import hsl2hsv from './hsl2hsv';
import hsv2hsl from './hsv2hsl';

export default function darkColor(baseVal) {
  const hue = baseVal[0];
  let sat = baseVal[1];
  let light = baseVal[2];

  const hsvArray = hsl2hsv(hue, sat, light);

  sat = Math.min(1, hsvArray[1] + .1);
  let value = hsvArray[2];

  if (value >= .5) {
    value = Math.max(0, value - .3);
  } else {
    value = Math.min(1, value + .3);
  }

  const hslArray = hsv2hsl(hue, sat, value);

  return hsl2hex([hslArray[0], hslArray[1], hslArray[2]]);
}
