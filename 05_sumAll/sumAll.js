const sumAll = function (a, b) {
  var start = a;
  var maxNum = b;
  if (start < 0 || maxNum < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
    output = "ERROR";
  } else if (start > maxNum) {
    start = b;
    maxNum = a;
    for (var i = start + 1; i <= maxNum; i++) {
      output = start += i;
    }
  } else {
    for (var i = a + 1; i <= maxNum; i++) {
      output = start += i;
    }
  }
  return output;
};

// Do not edit below this line
module.exports = sumAll;
