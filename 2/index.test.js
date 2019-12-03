const { preprocess, execute, extract } = require('./processor');

describe('preprocess ', () => {
  it('turns 0,0,0,0,0 to 0,12,2,0,0', () => {
    const data = [0,0,0,0,0];

    expect(preprocess(data)).toEqual([0,12,2,0,0]);
  });
});

describe('execute', () => {
  test('1,0,0,0,99 becomes 2,0,0,0,99', () => {
    const data = [1,0,0,0,99];
    expect(execute(data)).toEqual([2,0,0,0,99]);
  });
  test('1,0,0,0,1,0,0,0,99 becomes 4,0,0,0,99', () => {
    const data = [1,0,0,0,1,0,0,0,99];
    expect(execute(data)).toEqual([4,0,0,0,1,0,0,0,99]);
  });

  test('2,3,0,3,99 becomes 2,3,0,6,99', () => {
    const data = [2,3,0,3,99];
    expect(execute(data)).toEqual([2,3,0,6,99]);
  });
  test('2,3,0,3,2,3,0,3,99 becomes 2,3,0,6,99', () => {
    const data = [2,3,0,3,2,3,0,3,99];
    expect(execute(data)).toEqual([2,3,0,12,2,3,0,3,99]);
  });

  test('2,4,4,5,99,0 becomes 2,4,4,5,99,9801', () => {
    const data = [2,4,4,5,99,0];
    expect(execute(data)).toEqual([2,4,4,5,99,9801]);
  });

  test('1,1,1,4,99,5,6,0,99 becomes 30,1,1,4,2,5,6,0,99', () => {
    const data = [1,1,1,4,99,5,6,0,99];
    expect(execute(data)).toEqual([30,1,1,4,2,5,6,0,99]);
  });

});

describe('extract', () => {
  test('extracting 1,5,1,5 is 1', () => {
    const data = [1,5,1,5];
    expect(extract(data)).toEqual(1);
  })
});

describe('chaining', () => {
  test('1,0,0,0,0,0,0,0,0,0,0,0,0,99 becomes 1,12,2,0,0,0,0,0,0,0,0,0,0,99 becomes 2,12,2,0,0,0,0,0,0,0,0,0,0,99', () => {
    const data = [
      1,0,0,0,
      0,0,0,0,
      0,0,0,0,
      0,0,0,0,
      99];

    expect(execute(preprocess(data))).toEqual([
      2,12,2,0,
      0,0,0,0,
      0,0,0,0,
      0,0,0,0,
      99]);
  });

});
