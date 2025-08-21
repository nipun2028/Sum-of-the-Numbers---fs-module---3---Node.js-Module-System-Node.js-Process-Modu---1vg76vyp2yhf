const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'input.txt');
const outputPath = path.join(__dirname, 'output.txt');


const data = fs.readFileSync(inputPath, 'utf-8');

const lines = data.trim().split('\n');

const total = lines.reduce((sum, line) => {
  const parts = line.trim().split(' ');
  const num = parseInt(parts[1], 10);
  return sum + num;
}, 0);


fs.writeFileSync(outputPath, total.toString(), 'utf-8');

console.log(total);
