const { readFile } = require("fs");

let readfilePromise = new Promise((resolve, reject) => {
  readFile("test.txt", "utf-8", (err, data) => {
    if (err) {
      reject(err);
    }
    resolve(data);
  });
});

console.log(readfilePromise);
readfilePromise
  .then((result) => {
    console.log(`${result}`);
  })
  .catch((err) => {
    console.error(err);
  });
