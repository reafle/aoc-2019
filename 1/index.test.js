const fuelCounterUpper = require('./fcu');

it('throws an exception on incorrect data', () => {
  const modules = "thisisnotalistofmodules";

  const sumLambda = () => fuelCounterUpper.counterUp(modules);

  expect(sumLambda).toThrow("Bad data");
});

it('tests if fuelCounterUpper counter ups fuel in a required manner', () => {
  const modules = [
    12,
    14,
    1969,
    100756
  ];

  const sum = fuelCounterUpper.counterUp(modules);

  expect(sum).toBe(2 + 2 + 654 + 33583) // example of https://adventofcode.com/2019/day/1
});

describe('tests if fuelCounterUpper counter ups fuel while counter upping fuel that counters up the fuel', () => {
  it('works with single 12', () => {
    const modules = [ 12 ];
    const sum = fuelCounterUpper.counterUpWithFuelMass(modules);
    expect(sum).toBe(2) // example of https://adventofcode.com/2019/day/1#part2
  });

  it('works with 12 and 24', () => {
    const modules = [ 12, 48 ];
    const sum = fuelCounterUpper.counterUpWithFuelMass(modules);
    expect(sum).toBe(2 + 16) // example of https://adventofcode.com/2019/day/1#part2
  });

  it('works with 1969', () => {
    const modules = [ 1969 ];
    const sum = fuelCounterUpper.counterUpWithFuelMass(modules);
    expect(sum).toBe(966) // example of https://adventofcode.com/2019/day/1#part2
  });

  it('works with 100756', () => {
    const modules = [ 100756 ];
    const sum = fuelCounterUpper.counterUpWithFuelMass(modules);
    expect(sum).toBe(50346) // example of https://adventofcode.com/2019/day/1#part2
  });
});
