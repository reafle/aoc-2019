const { preprocess, execute, extract } = require('./processor');
const fs = require('fs');

if (process.argv.length !== 3) {
  console.error('Usage: node index.js [input_file]')
  return 1;
}

const path = process.argv[2];

fs.readFile(path,'utf8', function(err,content){
  if (err) {
    console.log('error occured ' +JSON.stringify(err));
  }

  let data = content.split('\n')[0].split(',');

  for (let i=0; i<=99;i++) {
    for (let j=0; j<=99;j++) {
      const currentPreprocess = preprocess.call(null, i, j);
      const processed = execute(currentPreprocess(data));
      const result = extract(processed);
      if (result === 19690720) {
        console.log(`FOUND!`+ 100 * i + j);
        process.exit(0);
      } else {
        console.log(`i=${i} j=${j} result=${result}...`);
      }
      
    }
  }
  //  console.log(JSON.stringify(execute(preprocess(data))));
  //  console.log(extract(execute(preprocess(data))));
});
