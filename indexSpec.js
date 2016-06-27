//DEPENDENCES
var chai = require('chai');
var expect = require('chai').expect;

//FUNCTIONS
var word = require('./index');


describe('Sanitize', function() {
  it('returns lowercae of a string', function() {

    var inputWord = 'hello world';
    var outputWord = word.sanitize(inputWord);outputWord
    expect(outputWord).to.equal('hello world');
    expect(outputWord).to.not.equal('HELLO WORLD');
    expect(outputWord).to.be.a('string');
    expect(outputWord).to.not.be.a('number');
    expect(outputWord).to.contain('hello');
  });


  it('remove any hyphen')
})
