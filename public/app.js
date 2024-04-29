///////////////////////
// simple card test //
//////////////////////
function Hide() {
  document.getElementById("card02").style.display = "none";
  document.getElementById("card03").style.display = "none";
  document.getElementById("card04").style.display = "none";
  document.getElementById("card05").style.display = "none";
}

Hide();

// card 01 //
document.getElementById("card01-x").addEventListener("click", () => {
  document.getElementById("card01").style.display = "none";
  document.getElementById("card02").style.display = "";
});

// card 02 //
document.getElementById("card02-o").addEventListener("click", () => {
  document.getElementById("card02").style.display = "none";
  document.getElementById("card03").style.display = "";
});
document.getElementById("card02-back").addEventListener("click", () => {
  document.getElementById("card02").style.display = "none";
  document.getElementById("card01").style.display = "";
});

// card 03 //
document.getElementById("card03-o").addEventListener("click", () => {
  document.getElementById("card03").style.display = "none";
  document.getElementById("card04").style.display = "";
});

document.getElementById("card03-back").addEventListener("click", () => {
  document.getElementById("card03").style.display = "none";
  document.getElementById("card02").style.display = "";
});

// card 04 //
document.getElementById("card04-o").addEventListener("click", () => {
  document.getElementById("card04").style.display = "none";
  document.getElementById("card05").style.display = "";
});
document.getElementById("card04-back").addEventListener("click", () => {
  document.getElementById("card04").style.display = "none";
  document.getElementById("card03").style.display = "";
});

// card 05 //
document.getElementById("card05-back").addEventListener("click", () => {
  document.getElementById("card05").style.display = "none";
  document.getElementById("card04").style.display = "";
});
