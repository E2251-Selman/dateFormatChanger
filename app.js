document.querySelector("#milad_btn").addEventListener("click", changeMilad);
document.querySelector("#hicri_btn").addEventListener("click", changeHicri);
let miladInput = document.querySelector("#milad");
let hicriInput = document.querySelector("#hicri");

function changeMilad() {
  miladInput.value =
    Math.round((miladInput.value - 621) / 33) + (miladInput.value - 621);
  hicriInput.value = miladInput.value;
  miladInput.value = "";
}

function changeHicri() {
  hicriInput.value = hicriInput.value - Math.round(hicriInput.value / 33) + 622;
  miladInput.value = hicriInput.value;
  hicriInput.value = "";
}
