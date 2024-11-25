const fs = require('fs').promises;

// async function to write to file
async function writeToFile() {
  try {
    await fs.writeFile('msg.txt', 'This is to say that a message is written using fs and async/await.');
    console.log('File has been saved');
  } catch (error) {
    console.log('Error writing a file:', error);
  }
}
// Promise to display message
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Hello, this is a message from promise!!!");
  } else {
    reject("Something is wrong!!!");
  }
});

myPromise
  .then((message) => {
    console.log(message);
    // Calling async funtion to write to the text file
    writeToFile();
  })
  .catch((error) => {
    console.log(error);
  });
