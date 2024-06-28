const express = require("express");
const router = express.Router();

const fs = require("fs");
const path = require("path");

router.get("", async (req, res) => {
  res.render("./articles/at-main.ejs");
});

router.get("/news/000001", async (req, res) => {
  res.render("./articles/at-news-000001.ejs");
});

router.get("/001", async (req, res) => {
  res.render("./articles/at-st-0001.ejs");
});

module.exports = router;
