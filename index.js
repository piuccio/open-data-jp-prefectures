const csv = require('csv-parse');
const fs = require('fs');
const util = require('util');

async function readCsv(filePath, transform = (x) => x) {
  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath).pipe(csv({ columns: true }, (err, data) => {
      if (err) reject(err);
      else resolve(transform(data));
    }));
  });
}

async function generate() {
  const data = await readCsv('./input/prefectures.csv');
  return util.promisify(fs.writeFile)('./prefectures.json', JSON.stringify(data, null, '  '));
}

if (require.main === module) {
  generate();
}
