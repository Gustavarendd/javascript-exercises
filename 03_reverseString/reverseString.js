const reverseString = function (str) {
  var splitStr = str.split("");

  var reverseArray = splitStr.reverse();

  var joinArray = reverseArray.join("");

  return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
