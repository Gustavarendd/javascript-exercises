const ftoc = function (f) {
  var c = (f - 32) * (5 / 9);
  return Math.round(c * 10) / 10;
};
// does the same as above: rounds to 1 decimal point
const ctof = function (x) {
  fa = x * (9 / 5) + 32;
  return parseFloat(fa.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
