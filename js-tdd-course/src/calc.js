const sum = (a,b) => a + b
const rest = (a,b) => a - b
const mult = (a,b) => a * b
const div = (a,b) => {
  return (b == 0) ? 'Error division by Zero' : a / b
}

module.exports = {
  sum,
  rest,
  mult,
  div
}
