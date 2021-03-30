const fs = require("fs");
function readFileSync() {
  const content = fs.readFileSync("./src/greeting.txt");
  return content.toString();
}
function readFileAsync() {
  return fs.readFile("./src/greeting.txt", (err, data) => {
    if (err) throw err;
    console.log("CONTENT: ", data.toString());
  });
}
function readFileName() {
  console.log("FILENAME: ", __filename);
}
function readDirName() {
  console.log("DIRNAME: ", __dirname);
}
module.exports = {
  readFileSync,
  readFileAsync,
  readFileName,
  readDirName,
};
// export default { readFileSync, readFileAsync, readFileName, readDirName };
