const fs = require('fs');
const path = require('path');
const myfile = require('config.json');
const outputFolderPath = path.join(__dirname, 'output');

// Create the 'output' folder if it doesn't exist
if (!fs.existsSync(outputFolderPath)) {
  fs.mkdirSync(outputFolderPath);
}

// Create three text files with simple content
for (let i = 1; i <= 3; i++) {
  // const fileName = `file${i}.txt`;
  // const filePath = path.join(outputFolderPath, fileName);
  // const fileContent = `This is file ${i}.`;

  // fs.writeFileSync(filePath, fileContent);
  // console.log(`Created ${fileName}`);
}

const jsonFilePath = path.join(__dirname, 'config.json');

console.log('')

// fs.readFile(jsonFilePath, 'utf8', (err, data) => {
//   if (err) {
//     console.error(`Error reading JSON file: ${err}`);
//     return;
//   }

//   try {
//     const jsonData = JSON.parse(data);
//     console.log('Read JSON file content:');
//     console.log(jsonData);
//   } catch (parseError) {
//     console.error(`Error parsing JSON: ${parseError}`);
//   }
// });


console.log('Files created successfully.');