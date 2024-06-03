const result_obj_guidance_length = 13;
const relationInput = document.querySelectorAll(".relation input");
const rExample = document.querySelectorAll(".r-example");
let currentShownIndex = null;
for (let i = 0; i < relationInput.length; i++) {
  relationInput[i].addEventListener("click", function () {
    if (currentShownIndex !== null) {
      rExample[currentShownIndex].classList.remove("show");
    }

    rExample[i].classList.toggle("show");
    currentShownIndex = i;
  });
}
