const express = require("express");
const errorhandler = require("./middlewares/errorhandler.js");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const cors = require("cors");
const path = require("path");
app.use(
  cors({
    origin: "http://localhost:8085",
    credentials: true,
  })
);
app.use(expressLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("layout", "./layouts/layout");

app.use(express.static("public"));

app.use(
  express.static(path.join(__dirname, "public"), {
    maxAge: "14d",
    setHeaders: (res, path) => {
      if (path.endsWith(".csv")) {
        res.setHeader("Cache-Control", "public, max-age=43200"); //12hours
      }
    },
  })
);

/* 라우팅 */
app.get("/", async (req, res) => {
  res.render("index.ejs");
});

const sponsoredtagRoutes = require("./routes/sponsoredtagRoutes/sponsoredtagRoutes.js");
app.use("/sponsoredtag", sponsoredtagRoutes);

const stguideRoutes = require("./routes/sponsoredtagRoutes/stguideRoutes.js");
app.use("/sponsoredtag/guide", stguideRoutes);

const riskykeywordRoutes = require("./routes/riskykeywordRoutes/riskykeywordRoutes.js");
app.use("/riskykeyword", riskykeywordRoutes);

const articleRoutes = require("./routes/articleRoutes/articleRoutes.js");
app.use("/article", articleRoutes);

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
