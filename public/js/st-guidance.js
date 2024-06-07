const relationInput = document.querySelectorAll(".relation input");
const rExample = document.querySelectorAll(".r-example");
let currentShownIndex = null;

for (let i = 0; i < relationInput.length; i++) {
  relationInput[i].addEventListener("click", function () {
    if (currentShownIndex !== null) {
      rExample[currentShownIndex].classList.remove("show");
    }

    if (currentShownIndex !== i) {
      rExample[i].classList.add("show");
      currentShownIndex = i;
    } else {
      currentShownIndex = null;
    }
  });
}

const platformInput = document.querySelectorAll(".platform input");
const pExample = document.querySelectorAll(".p-example");
let currentPhotoIndex = null;

for (let i = 0; i < platformInput.length; i++) {
  platformInput[i].addEventListener("click", function () {
    if (currentPhotoIndex !== null) {
      pExample[currentPhotoIndex].classList.remove("show");
    }
    if (currentPhotoIndex !== i) {
      pExample[i].classList.add("show");
      currentPhotoIndex = i;
    } else {
      currentPhotoIndex = null;
    }
  });
}
