export default function hsl2hsv(hue, sat, light) {
  const val = light + (sat * Math.min(light , 1 - light));
  const saturation = val ? 2 - ((2 * light) / val) : 0;

  return [hue, saturation, val];
}
