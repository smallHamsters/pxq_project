const express = require("express");
const router = express.Router();

const fs = require("fs");
const path = require("path");

const FILE_NAME = "st-keywordDATA.csv";
const csvPath = path.join(__dirname, "..", "public", "data", FILE_NAME);
const CSVfile = fs.readFileSync(csvPath, "utf-8"); //CSVfile 내부 데이터 전부 읽기
// console.log(CSVfile);

const rows = CSVfile.split("\r\n"); //CSVfie 내부 데이터 전부 행으로 자름
// console.log(rows);

const row2 = rows[1].split(","); // 내부 데이터를 ,별로 잘라 list에 담은 행 1개
// console.log(row2);

let result = [];
for (let i = 1; i < rows.length; i++) {
  result.push(rows[i].split(","));
}

// console.log(result);

let result_obj = result.map((subArray) => ({
  number: subArray[0],
  keyword: subArray[1],
  usageStatus: subArray[2],
  usageDescription: subArray[3],
  usageRestrictionReason: subArray[4],
  exampleWord: subArray[5],
  exampleSentence: subArray[6],
  solution: subArray[7],
  cautionNotice: subArray[8],
  usageIssueUrl: subArray[9],
}));

// console.log(result_obj.length);

router.get("", (req, res) => {
  res.render("./sponsoredtags/st-main.ejs");
});

router.get("/check", (req, res) => {
  res.render("./sponsoredtags/st-check.ejs");
});

router.get("/dictionary", (req, res) => {
  res.render("./sponsoredtags/st-dictionary.ejs", {
    result_obj: result_obj,
  });
});

router.get("/guidance", (req, res) => {
  res.render("./sponsoredtags/st-guidance.ejs");
});

router.get("/guide", (req, res) => {
  res.render("./sponsoredtags/st-guide.ejs");
});

module.exports = router;
