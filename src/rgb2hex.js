export default function rgb2hex(red, green, blue) {
  return `#${[red, green, blue].map(val => Math.round(val * 255).toString(16).padStart(2, 0)).join('').toUpperCase()}`;
};