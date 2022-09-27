const repeatString = function (string, num) {
  var output = "";
  if (num >= 0) {
    for (var i = 0; i < num; i++) {
      output += string;
    }
  } else {
    output = "ERROR";
  }
  return output;
};

// Do not edit below this line
module.exports = repeatString;
