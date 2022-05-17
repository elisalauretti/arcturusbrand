const open1 = document.querySelector(".open1");

const open2 = document.querySelector(".open2");
const open3 = document.querySelector(".open3");
const open4 = document.querySelector(".open4");

const close1 = document.querySelector(".close1");
const close2 = document.querySelector(".close2");
const close3 = document.querySelector(".close3");
const close4 = document.querySelector(".close4");

const panel1 = document.querySelector(".panel-1");

const panel2 = document.querySelector(".panel-2");
const panel3 = document.querySelector(".panel-3");
const panel4 = document.querySelector(".panel-4");

open1.addEventListener("click", openpanel1);
close1.addEventListener("click", closepanel1);
function openpanel1() {
    panel1.classList.remove("chiuso");
    panel1.classList.add("aperto");
    open1.classList.add("attivo");
    close1.classList.remove("attivo");
}
function closepanel1() {
    panel1.classList.remove("aperto");
    panel1.classList.add("chiuso");
    open1.classList.remove("attivo");
    close1.classList.add("attivo");
}

open2.addEventListener("click", openpanel2);
close2.addEventListener("click", closepanel2);
function openpanel2() {
    panel2.classList.remove("chiuso");
    panel2.classList.add("aperto");
    open2.classList.add("attivo");
    close2.classList.remove("attivo");
}
function closepanel2() {
    panel2.classList.remove("aperto");
    panel2.classList.add("chiuso");
    open2.classList.remove("attivo");
    close2.classList.add("attivo");
}

open3.addEventListener("click", openpanel3);
close3.addEventListener("click", closepanel3);
function openpanel3() {
    panel3.classList.remove("chiuso");
    panel3.classList.add("aperto");
    open3.classList.add("attivo");
    close3.classList.remove("attivo");
}
function closepanel3() {
    panel3.classList.remove("aperto");
    panel3.classList.add("chiuso");
    open3.classList.remove("attivo");
    close3.classList.add("attivo");
}

open4.addEventListener("click", openpanel4);
close4.addEventListener("click", closepanel4);
function openpanel4() {
    panel4.classList.remove("chiuso");
    panel4.classList.add("aperto");
    open4.classList.add("attivo");
    close4.classList.remove("attivo");
}
function closepanel4() {
    panel4.classList.remove("aperto");
    panel4.classList.add("chiuso");
    open4.classList.remove("attivo");
    close4.classList.add("attivo");
}




