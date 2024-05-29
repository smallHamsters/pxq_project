document
  .querySelector(".st-keyword-detail-toggle")
  .addEventListener("click", function () {
    document.querySelector(".list-detail").classList.toggle("show");
    document.querySelector(".list-d").classList.toggle("bg-green");
  });

document
  .querySelector(".st-keyword-detail-toggle2")
  .addEventListener("click", function () {
    document.querySelector(".list-detail2").classList.toggle("show");
    document.querySelector(".list-d2").classList.toggle("bg-green");
  });

document
  .querySelector(".st-keyword-detail-toggle3")
  .addEventListener("click", function () {
    document.querySelector(".list-detail3").classList.toggle("show");
    document.querySelector(".list-d3").classList.toggle("bg-green");
  });

// window.onload = function () {
//   documente
//     .querySelector(".st-keyword-detail-toggle")
//     .addEventListener("click", function () {
//       console.log("click");
//     });
// };
