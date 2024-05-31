const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();

app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("layout", "./layouts/layout");
app.listen(8082, () => {
  console.log("http://localhost:8082");
  console.log("http://localhost:8082/testjs");
});

app.use(express.static("public"));

/* 라우팅 */
app.get("/", function (req, res) {
  res.render("index.ejs");
});

const sponsoredtagRoutes = require("./routes/sponsoredtag");
app.use("/sponsoredtag", sponsoredtagRoutes);

/* 에러 핸들링 */
app.use(function (req, res, next) {
  return res.status(404).render("./errors/404.ejs");
});
