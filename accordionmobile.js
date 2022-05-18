const open1mob = document.querySelector(".open1mob");

const close1mob = document.querySelector(".close1mob");
const panel1mob = document.querySelector(".panel-1mob");


open1mob.addEventListener("click", openpanel1mob);
close1mob.addEventListener("click", closepanel1mob);
function openpanel1mob() {
    panel1mob.classList.remove("chiuso");
    panel1mob.classList.add("aperto");
    open1mob.classList.add("attivo");
    close1mob.classList.remove("attivo");
}
function closepanel1mob() {
    panel1mob.classList.remove("aperto");
    panel1mob.classList.add("chiuso");
    open1mob.classList.remove("attivo");
    close1mob.classList.add("attivo");
}