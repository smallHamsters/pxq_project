const express = require("express");
const router = express.Router();

const fs = require("fs");
const path = require("path");

router.get("", async (req, res) => {
  res.render("./riskykeywords/rk-main.ejs");
});

module.exports = router;
