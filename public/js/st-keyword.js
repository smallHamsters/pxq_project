const result_obj_length = document.querySelectorAll(".list-d").length;

for (let i = 0; i < result_obj_length; i++) {
  document
    .querySelectorAll(".st-keyword-detail-toggle")
    [i].addEventListener("click", function () {
      document
        .querySelectorAll(".list-detail")
        [i].classList.toggle("slide-down-show");
      document.querySelectorAll(".list-d")[i].classList.toggle("bg-blue100");
    });
}
