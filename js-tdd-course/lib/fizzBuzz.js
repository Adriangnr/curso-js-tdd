/*
Si el numero es divisible por 3, escribe Fizz
Si el numero es divisible por 5, escribe Buzz
Si el numero es divisible por 3 y por 5 escribe FizzBuzz
Si el numero no es multiplo de ninguno, retorna el numero
*/

const multp3 = number => number % 3 == 0;
const multp5 = number => number % 5 == 0;
const multp3and5 = number => multp3(number) && multp5(number);

module.exports = number => {
  let result = number;
  if (number !== 0) {
    if (multp3and5(number)) result = 'FizzBuzz';else {
      if (multp5(number)) result = 'Buzz';else if (multp3(number)) result = 'Fizz';
    }
  }

  return result;
};