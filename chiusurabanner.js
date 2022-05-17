const closebanner = document.querySelector(".croce");
const bannerr = document.querySelector("#banner");


closebanner.addEventListener("click", chiusura);

function chiusura() {
    bannerr.classList.add("chiuso");
}