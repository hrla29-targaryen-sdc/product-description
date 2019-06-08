const fs = require('fs');
const path = require('path');
const generate = require('../dressGenerator.js');

let dressData = fs.createWriteStream(
  path.resolve(__dirname, './mongoData.json')
);

let startTime = (new Date).getTime();

// generator
const generateRecords = async () => {
  for (let i = 1; i <= 10000000; i++) {
    let dress = generate.generateMongo();
    dress.ID = i;
    if (!dressData.write(JSON.stringify(dress) + (i === 10000000 ? ']' : ','))) {
      await new Promise(resolve => dressData.once('drain', resolve));
    }
    if(i === 10000000) {
      console.log('Time taken to generate data: ');
      console.log((new Date).getTime() - startTime);
    }
  }
};

dressData.write('[', generateRecords);