const express = require("express");
const errorhandler = require("./middlewares/errorhandler.js");
const expressLayouts = require("express-ejs-layouts");
const app = express();

app.use(expressLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("layout", "./layouts/layout");

app.use(express.static("public"));

/* 라우팅 */
app.get("/", function (req, res) {
  res.render("index.ejs");
});

const sponsoredtagRoutes = require("./routes/sponsoredtagRoutes");
const router = require("./routes/sponsoredtagRoutes");
app.use("/sponsoredtag", sponsoredtagRoutes);

// 에러를 생성하는 라우트 (예시용)
app.get("/error", (req, res, next) => {
  const error = new Error("This is a forced error.");
  error.status = 500;
  next(error);
});

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use(errorhandler);

app.listen(8082, () => {
  console.log("http://localhost:8082");
  console.log("http://localhost:8082/testjs");
});
