const express = require("express");
const router = express.Router();

router.get("", (req, res) => {
  res.render("./sponsoredtags/st-main.ejs");
});

router.get("/checker", (req, res) => {
  res.render("./sponsoredtags/st-checker.ejs");
});

router.get("/keyword", (req, res) => {
  res.render("./sponsoredtags/st-keyword.ejs");
});

router.get("/sentence", (req, res) => {
  res.render("./sponsoredtags/st-sentence.ejs");
});

router.get("/case", (req, res) => {
  res.render("./sponsoredtags/st-case.ejs");
});

router.get("/guide", (req, res) => {
  res.render("./sponsoredtags/st-guide.ejs");
});

module.exports = router;
