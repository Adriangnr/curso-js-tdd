'use strict';

var sum = function sum(a, b) {
  return a + b;
};
var rest = function rest(a, b) {
  return a - b;
};
var mult = function mult(a, b) {
  return a * b;
};
var div = function div(a, b) {
  return b == 0 ? 'Error division by Zero' : a / b;
};

module.exports = {
  sum: sum,
  rest: rest,
  mult: mult,
  div: div
};