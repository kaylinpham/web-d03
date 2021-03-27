const http = require("http");
const fs = require("fs");

// import {
//   readFileSync,
//   readFileAsync,
//   readFileName,
//   readDirName,
// } from "./modules.js";
const modules = require("./modules");

const { readFileSync, readFileAsync, readFileName, readDirName } = modules;

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World hahaha");
});

server.listen(port, hostname, () => {
  // console.log(`Server running at http://${hostname}:${port}/`);
  console.log("START");
  console.log("SYNC CONTENT: ", readFileSync());
  readFileAsync();
  // console.log("CONTENT: ", readFileAsync());
  console.log("END");
  readFileName();
  readDirName();
});
