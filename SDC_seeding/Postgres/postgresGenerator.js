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
  'productName|sizes|description|color1|color2|imageUrlsColor1|imageUrlsColor1|designer|fit|price|stars|reviews\n',
  () => generateRecords()
);

// After generating, run below command in psql shell for db 'productDescriptions'
// COPY products("productName","sizes","description","color1","color2","imageUrlsColor1","imageUrlsColor2","designer","fit","price","stars","reviews") from '/Users/kathleenhogan/Desktop/Kathleen/HR/SDC/product-description/SDC_seeding/Postgres/postgresData.csv' delimiter '|' CSV header;