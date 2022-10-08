const palindromes = function (a) {
  var input = a
    .toLowerCase()
    .replace(/[!"#$%&'()*+,-./:; <=>?@[\]^_`{|}~]/g, "");
  var reverseStr = input.split("").reverse().join("");
  if (input == reverseStr) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
