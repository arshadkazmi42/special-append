const { expect } = require('chai');

const sAppend = require('../index');

const ERROR_MESSAGE = {
  CHARACTER_LIMIT: 'Characters limit should be greater than 0'
};

describe('should append special characters to input strings', () => {
  it('should return empty response', () => {
    expect(sAppend()).to.be.undefined;
    expect(sAppend('x', 'x', 2));
  });
  it('should append {any character} character after x characters', () => {
    expect(sAppend('123456789', '-', 3)).to.be.equal('123-456-789');
    expect(sAppend('123456789', '$', 2)).to.be.equal('12$34$56$78$9');
    expect(sAppend('123456789', '0', 2)).to.be.equal('1203405607809');
    expect(sAppend('123456789', 'A', 4)).to.be.equal('1234A5678A9');
  });
  it('should throw error for invalid characters length', () => {
    try {
      sAppend('ARSHAD', 'x', 0);
    } catch (err) {
      expect(err.message).to.be.equal(ERROR_MESSAGE.CHARACTER_LIMIT);
    }
  });
});
