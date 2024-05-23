const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");

app.use(expressLayouts);
app.set("view engine", "ejs");

app.listen(8082, () => {
  console.log("http://localhost:8082");
  console.log("http://localhost:8082/testjs");
});

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
