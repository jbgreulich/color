export default function generateHSLColorArray() {
  let hslArray = [];
  hslArray.push(Math.floor(Math.random()*360));
  for (let i = 0; i < 2; i++) {
    hslArray.push( parseFloat( Math.random().toFixed(4) ) );
  }
  return hslArray;
}
