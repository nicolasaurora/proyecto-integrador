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


//Contador de cards.
const buttonsAdd = document.querySelectorAll(".button--add");
const buttonsRemove = document.querySelectorAll(".button--remove");
let cardCounters = document.querySelectorAll(".card__counter");

// Verificar si no hay contadores de tarjetas y deshabilitar los botones de eliminación
if (cardCounters.length === 0) {
    buttonsRemove.forEach(button => {
        button.disabled = true;
    });
}

function add() {
    buttonsAdd.forEach((button, index) => {
        button.onclick = function () {
            cardCounters[index].innerHTML++;
            // Habilitar los botones de eliminación después de agregar una tarjeta
            buttonsRemove.forEach(button => {
                button.disabled = false;
            });
        };
    });
}

add();

function remove() {
    buttonsRemove.forEach((button, index) => {
        button.onclick = function () {
            if (cardCounters[index].innerHTML > 0) {
            cardCounters[index].innerHTML--;
            }
            // Deshabilitar los botones de eliminación si el contador llega a cero
            if (cardCounters[index].innerHTML == 0) {
                button.disabled = true;
                buttonsRemove.setAttribute("disabled");
            }
        };
    });
}

remove();



//Validaciones 

const inputName = document.getElementById("id-nombre");
const inputPrice = document.getElementById("id-precio");
const inputStock = document.getElementById("id-stock");
const buttonValidate = document.getElementById("button-submit");


const regexName = /^[a-zA-Z\s-]+$/;
const regexPrice = /^\$?\d+(\.\d{1,2})?$/;
const regexStock = /^(?:100|[1-9]?[0-9])$/;

function validate() {
    if(!regexName.test(inputName.value)) {
        inputName.nextElementSibling.innerText = "El nombre es invalido";
    } else {
        inputName.nextElementSibling.innerText = "";
    }

    if (!regexPrice.test(regexPrice.value)) {
        regexPrice.nextElementSibling.innerText = "El valor ingresado no corresponde a un numero";
    } else {
        regexPrice.nextElementSibling.innerText = "";
    }

    if (!regexStock.test(regexStock.value)) {
        regexStock.nextElementSibling.innerText = "El numero ingresado supera el maximo permitido";
    } else {
        regexStock.nextElementSibling.innerText = "";
    }
}

buttonValidate.onclick = validate;
