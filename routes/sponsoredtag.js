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
  숫자: subArray[0],
  단어: subArray[1],
  사용가부: subArray[2],
  사용제한: subArray[3],
  불가사유: subArray[4],
  사용예시: subArray[5],
  해결방법: subArray[6],
  주의사항: subArray[7],
}));

// console.log(result_obj.length);

router.get("", (req, res) => {
  res.render("./sponsoredtags/st-main.ejs");
});

router.get("/checker", (req, res) => {
  res.render("./sponsoredtags/st-checker.ejs");
});

router.get("/keyword", (req, res) => {
  res.render("./sponsoredtags/st-keyword.ejs", {
    result_obj: result_obj,
  });
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
