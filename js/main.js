// Elipsis de las card.
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


// -----------------------------------------------

// const buttonAdd = document.querySelectorAll(".button--add");
// const buttonRemove = document.querySelectorAll(".button--remove");
// const cardCounter = document.querySelectorAll(".card__counter");

// const buyCounter = document.getElementsByClassName(".buy__counter");

// if (cardCounter.length === 0) {
//     buttonRemove.forEach(function (button) {
//         button.disabled = true;
//     });

// }


// if (buttonAdd.onclick) {
//     buyCounter.style.display = inline;
// }

