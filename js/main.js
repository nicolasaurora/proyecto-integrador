const paragraph4 = document.querySelectorAll(".card__text");
const buttonShow = document.querySelectorAll(".card__button-show");

function show() {
    paragraph4.className = "card__text";
    buttonShow.innerHTML = "Ver más";
    buttonShow.onclick = hide;
}

function hide() {
    paragraph4.className = "";
    buttonShow.innerHTML = "Ver menos";
    buttonShow.onclick = show;
}


buttonShow.onclick = hide;