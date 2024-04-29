const express = require("express");
const app = express();

app.listen(8082, () => {
  console.log("http://localhost:8082");
  console.log("http://localhost:8082/testjs");
});

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/test", function (req, res) {
  res.sendFile(__dirname + "/sponsoredtagTEST.html");
});

app.get("/testJS", function (req, res) {
  res.sendFile(__dirname + "/cardJS.html");
});
