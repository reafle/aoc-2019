const fs = require('fs');
const readline = require('readline');
const fuelCounterUpper = require('./fcu');

if (process.argv.length !== 3) {
  console.error('Usage: node index.js [input_file]')
  return 1;
}

const path = process.argv[2];

let lines = [];
const readInterface = readline.createInterface({
  input: fs.createReadStream(path)
});

readInterface.on('line', (line) => {
  lines.push(parseInt(line));
}).on('close', () => {
  console.log(`Sum of fuel required: ${fuelCounterUpper.counterUp(lines)}`);
  console.log(`Sum of recursive fuel required: ${fuelCounterUpper.counterUpWithFuelMass(lines)}`);
});


