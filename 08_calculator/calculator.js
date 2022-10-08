const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (a) {
  var sum = 0;
  for (var i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;
};

const multiply = function (a) {
  var sum = 1;
  for (var i = 0; i < a.length; i++) {
    sum *= a[i];
  }
  return sum;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  var sum = 1;
  if (a == 1 || a == 0) {
    return sum;
  } else {
    for (var i = a; i >= 1; i--) {
      sum = sum * i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
