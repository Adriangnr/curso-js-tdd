/*
Si el numero es divisible por 3, escribe Fizz
Si el numero es divisible por 5, escribe Buzz
Si el numero es divisible por 3 y por 5 escribe FizzBuzz
Si el numero no es multiplo de ninguno, retorna el numero
*/

import { expect } from 'chai'

const fizzbuzz = require('../src/fizzBuzz')

describe('FizzBuzz', () => {
  it('Should return Fizz when multiple of 3', () => {
    expect(fizzbuzz(3)).to.be.equal('Fizz')
    expect(fizzbuzz(6)).to.be.equal('Fizz')
    expect(fizzbuzz(12)).to.be.equal('Fizz')
  })

  it('Should return Buzz when multiple of 5', () => {
    expect(fizzbuzz(5)).to.be.equal('Buzz')
    expect(fizzbuzz(10)).to.be.equal('Buzz')
    expect(fizzbuzz(25)).to.be.equal('Buzz')
  })

  it('Should return FizzBuzz when multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).to.be.equal('FizzBuzz')
    expect(fizzbuzz(30)).to.be.equal('FizzBuzz')
    expect(fizzbuzz(75)).to.be.equal('FizzBuzz')
  })

  it('Should return the number when not multiple of 3 or 5', () => {
    expect(fizzbuzz(7)).to.be.equal(7)
  })

  it('Should return the number when is 0', () => {
    expect(fizzbuzz(0)).to.be.equal(0)
  })
})
