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

// console.log(result_obj);

let guidance_obj = result.map((subArray) => ({
  exampleWord: subArray[5],
  exampleSentence: subArray[6],
  cautionNotice: subArray[8],
}));

// console.log(guidance_obj[24].exampleWord);

//// 상황별 추천문구 결과를 위한 데이터 준비 ////

let result_obj_guidance = [];
let exampleWord_guidance = [
  guidance_obj[23].exampleWord,
  guidance_obj[29].exampleWord,
  guidance_obj[27].exampleWord,
  guidance_obj[31].exampleWord,
  guidance_obj[32].exampleWord,
  "-",
  guidance_obj[51].exampleWord,
  guidance_obj[15].exampleWord,
  guidance_obj[19].exampleWord,
  guidance_obj[16].exampleWord,
  guidance_obj[34].exampleWord,
  guidance_obj[37].exampleWord,
  guidance_obj[25].exampleWord,
  guidance_obj[1].exampleWord,
];

let exampleSentence_guidance = [
  guidance_obj[23].exampleSentence,
  guidance_obj[29].exampleSentence,
  guidance_obj[27].exampleSentence,
  guidance_obj[31].exampleSentence,
  guidance_obj[32].exampleSentence,
  "이 콘텐츠는 제휴마케팅의 일환으로 대가성 수수료를 받습니다.",
  guidance_obj[51].exampleSentence,
  guidance_obj[15].exampleSentence,
  guidance_obj[19].exampleSentence,
  guidance_obj[16].exampleSentence,
  guidance_obj[34].exampleSentence,
  guidance_obj[37].exampleSentence,
  guidance_obj[25].exampleSentence,
  guidance_obj[1].exampleSentence,
];

let cautionNotice_guidance = [
  guidance_obj[23].cautionNotice,
  guidance_obj[29].cautionNotice,
  guidance_obj[27].cautionNotice,
  guidance_obj[31].cautionNotice,
  guidance_obj[32].cautionNotice,
  "-",
  guidance_obj[51].cautionNotice,
  guidance_obj[15].cautionNotice,
  guidance_obj[19].cautionNotice,
  guidance_obj[16].cautionNotice,
  guidance_obj[34].cautionNotice,
  guidance_obj[37].cautionNotice,
  guidance_obj[25].cautionNotice,
  guidance_obj[1].cautionNotice,
];
// console.log(exampleWord_guidance);
// console.log(exampleSentence_guidance);
// console.log(cautionNotice_guidance);

for (let i = 0; i < exampleWord_guidance.length; i++) {
  result_obj_guidance.push({
    exampleWord: exampleWord_guidance[i],
    exampleSentence: exampleSentence_guidance[i],
    cautionNotice: cautionNotice_guidance[i],
  });
}

// console.log(result_obj_guidance);

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
  res.render("./sponsoredtags/st-guidance.ejs", {
    result_obj_guidance: result_obj_guidance,
  });
});

router.get("/guide", (req, res) => {
  res.render("./sponsoredtags/st-guide.ejs");
});

module.exports = router;
