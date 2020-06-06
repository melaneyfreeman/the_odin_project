const ftoc = function(deg) {
  //f to c formula
  let c = (deg - 32) * (5/9);
  //round to one decimal place
  c = Math.round(c * 10) / 10;
  console.log(c);
  return c;
}

const ctof = function(deg) {
  //c to f formula
  let f = (deg * 9/5) + 32;
  //round to one decimal place
  f = Math.round(f * 10) / 10;
  console.log(f);
  return f;

}

ctof(89.6);
module.exports = {
  ftoc,
  ctof
}
