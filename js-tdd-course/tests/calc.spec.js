const chai = require('chai')
const expect = chai.expect
const calc = require('../src/calc')

describe('Calc', () => {

  describe('Smoke Tests', () => {

    it('should exist the calc lib', () => {
      expect(calc).to.exist
    })

    it('should exist the method sum', () => {
      expect(calc.sum).to.exist
      expect(calc.sum).to.be.a.function
    })

    it('should exist the method mult', () => {
      expect(calc.mult).to.exist
      expect(calc.mult).to.be.a.function
    })

    it('should exist the method div', () => {
      expect(calc.div).to.exist
      expect(calc.div).to.be.a.function
    })

    it('should exist the method rest', () => {
      expect(calc.rest).to.exist
      expect(calc.rest).to.be.a.function
    })

  })

  describe('Sum', () => {
    it('Should return 4 when sum(2,2)', () => {
      expect(calc.sum(2,2)).to.be.equal(4)
    })

    it('Should return -4 when sum(6,10)', () => {
      expect(calc.sum(-10,6)).to.be.equal(-4)
    })
  })

  describe('Rest', () => {
    it('Should return 0 when rest(2,2)', () => {
      expect(calc.rest(2,2)).to.be.equal(0)
    })

    it('Should return -1 when rest(2,3)', () => {
      expect(calc.rest(2,3)).to.be.equal(-1)
    })
  })

  describe('Mult', () => {
    it('Should return 0 when mult(0,2)', () => {
      expect(calc.mult(0,2)).to.be.equal(0)
    })

    it('Should return 10 when mult(2,5)', () => {
      expect(calc.mult(2,5)).to.be.equal(10)
    })
  })

  describe('Div', () => {
    it('Should return 0 when div(0,2)', () => {
      expect(calc.div(0,2)).to.be.equal(0)
    })

    it('Should return 10 when div(20,2)', () => {
      expect(calc.div(20,2)).to.be.equal(10)
    })

    it('Should return Error division by Zero when div(20,0)', () => {
      expect(calc.div(20,0)).to.be.equal('Error division by Zero')
    })
  })
})
