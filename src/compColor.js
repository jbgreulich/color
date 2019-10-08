import hsl2hex from './hsl2hex';

export default function compColor(baseVal) {
  let hue = baseVal[0];
  const sat = baseVal[1];
  const light = baseVal[2];

  hue = (hue + 180) % 360;

  return hsl2hex([hue, sat, light]);
}
