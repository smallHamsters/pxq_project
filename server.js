const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();

app.use(expressLayouts);
app.set("view engine", "ejs");

app.listen(8082, () => {
  console.log("http://localhost:8082");
  console.log("http://localhost:8082/testjs");
});

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("index.ejs");
});

/* 에러 핸들링 */
app.use(function (req, res, next) {
  return res.status(404).send("404에러남");
});
