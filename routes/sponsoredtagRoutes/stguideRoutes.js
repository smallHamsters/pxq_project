const express = require("express");
const router = express.Router();

router.get("", async (req, res) => {
  res.render("./sponsoredtags/st-guide.ejs");
});

router.get("/blog", async (req, res) => {
  res.render("./sponsoredtags/st-guide-blog.ejs");
});

router.get("/youtube", async (req, res) => {
  res.render("./sponsoredtags/st-guide-yt.ejs");
});

router.get("/instagram", async (req, res) => {
  res.render("./sponsoredtags/st-guide-ig.ejs");
});
module.exports = router;
