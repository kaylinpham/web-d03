const express = require("express");
const bodyParser = require("body-parser");

const usersRoute = require("./routes/users.route");
const postsRoute = require("./routes/posts.route");

const app = express();
const port = 8080;

app.use(bodyParser.json());

app.use("/users", usersRoute);

app.use("/posts", postsRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
