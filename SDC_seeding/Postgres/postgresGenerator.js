const fs = require('fs');
const path = require('path');
const generate = require('../dressGenerator.js');

let dressData = fs.createWriteStream(
  path.resolve(__dirname, './postgresData.csv')
);

let startTime = (new Date).getTime();

// generator
const generateRecords = async () => {
  for (let i = 1; i <= 10000000; i += 1) {
    let dress = generate.generatePostgres();

    if (!dressData.write(dress + '\n')) {
      await new Promise(resolve => dressData.once('drain', resolve));
    }
    if(i === 10000000) {
      console.log('Time taken to generate data: ');
      console.log((new Date).getTime() - startTime);
    }
  }
};

dressData.write(
  'name|sizes|description|color1|color2|color1images|color2images|designer|fit|price|stars|reviews\n',
  () => generateRecords()
);