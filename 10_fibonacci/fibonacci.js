const fibonacci = function (a) {
  var num = [];
  if (a < 0) {
    return "OOPS";
  } else {
    for (var i = 0; i < a; i++) {
      if (num.length < 2) {
        num.push(1);
      } else {
        num.push(num[num.length - 1] + num[num.length - 2]);
      }
    }
  }
  return num[num.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
