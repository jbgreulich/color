export default function hsv2hsl(hue, sat, val) {
  const light = val - val * sat / 2;
  const m = Math.min(light, 1 - light);
  const saturation = m ? (val - light) / m : 0

  return [hue, saturation, light];
}
