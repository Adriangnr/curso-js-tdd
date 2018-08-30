import { expect } from 'chai'; //chai -> should, expect or asset

//npm test -- --bail frena ante el primer test que falla.
//se puede agrgar, antes del it, context('desc', function() {})
//al context le puedo decir context.only para que corra solo ese contexto
//le puedo poner tambien it.skip para ignorar el test.

describe('Main', () => {
  var arr;

  //hooks
  beforeEach(function(){
    arr = [1,2,3]
    //before
  })

  //hooks
  after(function(){
    console.log("Execute one time AFTER tests")
    //afterEach
  })

  it('Should have a size of 4 when push', () => {
    arr.push(4)
    expect(arr).to.have.lengthOf(4)
  })

  it('Should not have value 3 when remove ', () => {
    arr.pop()
    expect(arr).to.not.include(3)
  })

  it('Should remove the value 3 when use pop', () => {
    expect(arr.pop() === 3).to.be.true
  })

  it('Should have a size of 2 when pop a value', () => {
    arr.pop()
    expect(arr).to.have.lengthOf(2)
  })

  it('Should be an array', () => {
    expect(arr).to.be.a('array')
  })

});
