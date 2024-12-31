import { sum } from './sum';

describe('Sum function', () => {
  it('should return the correct sum of two numbers', () => {
    expect(sum(1, 2)).to.equal(3);
    expect(sum(-1, 1)).to.equal(0);
    expect(sum(0, 0)).to.equal(0);
  });

  it('should handle negative numbers', () => {
    expect(sum(-1, -1)).to.equal(-2);
  });
});
