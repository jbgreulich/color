import rgb2hex from "./rgb2hex";
import hsl2rgb from "./hsl2rgb";

export default function(hslVal) {
  return rgb2hex(...hsl2rgb(hslVal));
};