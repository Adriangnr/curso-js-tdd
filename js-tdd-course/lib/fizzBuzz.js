'use strict';

/*
Si el numero es divisible por 3, escribe Fizz
Si el numero es divisible por 5, escribe Buzz
Si el numero es divisible por 3 y por 5 escribe FizzBuzz
Si el numero no es multiplo de ninguno, retorna el numero
*/

var multp3 = function multp3(number) {
  return number % 3 == 0;
};
var multp5 = function multp5(number) {
  return number % 5 == 0;
};
var multp3and5 = function multp3and5(number) {
  return multp3(number) && multp5(number);
};

module.exports = function (number) {
  var result = number;
  if (number !== 0) {
    if (multp3and5(number)) result = 'FizzBuzz';else {
      if (multp5(number)) result = 'Buzz';else if (multp3(number)) result = 'Fizz';
    }
  }

  return result;
};