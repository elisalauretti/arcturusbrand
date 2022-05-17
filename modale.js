
const btn4Col = document.querySelector(".btn-4");
const btn6Col = document.querySelector(".btn-6");
const galleryContainer = document - querySelector(".listaprod");
btn4Col.addEventListener("click", toggle4Column);
btn6Col.addEventListener("click", toggle6Column);
function toggle4Column() {
    btn4Col.classList.add("btn active");
    btn6Col.classList.remove("btn active");
    galleryContainer.classList.remove("gallery-6-col");
}
function toggle6Column() {
    btn4Col.classList.remove("btn active");
    btn6Col.classList.add("btn active");
    galleryContainer.classList.add("gallery-6-col");
}