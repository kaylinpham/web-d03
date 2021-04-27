const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const usersRoute = require("./routes/users.route");
const postsRoute = require("./routes/posts.route");
const loginRoute = require("./routes/login.route");

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/web-d03-db", function (err) {
  if (err) {
    console.log(`Cannot connect to mongodb: ${err.toString()}`);
  }
});

app.use("/users", (req, res, next) => {
  console.log("The request is received at : ", new Date());
  next();
});
//bỏ phần views
app.use("/users", usersRoute);

app.use("/posts", postsRoute);

app.use("/login", loginRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
