const paragraphs = document.querySelectorAll(".card__text");
const buttonsShow = document.querySelectorAll(".card__button-show");

function show() {
    const paragraph = this.previousElementSibling;
    paragraph.classList.add("card__text");
    this.innerHTML = "Ver más";
    this.onclick = hide;
}

function hide() {
    const paragraph = this.previousElementSibling;
    paragraph.classList.remove("card__text");
    this.innerHTML = "Ver menos";
    this.onclick = show;
}

buttonsShow.forEach(function (button) {
    button.onclick = hide;
});
