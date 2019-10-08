export default function hsl2rgb(hslVal) {
  let hue = hslVal[0];
  let sat = hslVal[1];
  let light = hslVal[2];

  hue /= 360;

  let red, green, blue;

  if (sat === 0) {
    red = green = blue = light;
  } else {
    let rgb = (x, y, z) => {
      if(z < 0) z += 1;
      if(z > 1) z -= 1;
      if(z < 1/6) return x + (y - x) * 6 * z;
      if(z < 1/2) return y;
      if(z < 2/3) return x + (y - x) * (2/3 - z) * 6;
      return x;
    }
    let y = light < 0.5 ? light * (1 + sat) : light + sat - light * sat;
    let x = 2 * light - y;
    red = rgb(x, y, hue + 1/3);
    green = rgb(x, y, hue);
    blue = rgb(x, y, hue - 1/3);
  }

  return [red, green, blue];
}