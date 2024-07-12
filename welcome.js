const fs = require('fs');
const content = 'Hello Node\n';
const fileName = 'welcome.txt';

fs.writeFile(fileName, content, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  else 
    console.log('File created successfully');
});