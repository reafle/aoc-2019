const funcMap = (opCode) => {
  switch(opCode) {
    case 1:
      return (a,b) => a+b;
    case 2:
      return (a,b) => a*b;
    default:
      return _ => _;
  }
};

const execute = (intcode) => {
  intcode = intcode.map(i => parseInt(i));
  let i = 0;
  let op;
  while((op = intcode[i]) != 99 || i > 1000) {
    const a = intcode[intcode[i+1]];
    const b = intcode[intcode[i+2]];
    intcode[intcode[i+3]] = funcMap(op)(a, b)
    i += 4;
  }

  return intcode;
};

const preprocess = (noun = 12, verb = 2) => (intcode) => {
  intcode[1] = noun;
  intcode[2] = verb;
  return intcode;
}

const extract = (intcode) => intcode.shift();

module.exports = {
  execute,
  preprocess,
  extract
}
