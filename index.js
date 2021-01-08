const formulario = document.getElementById('formulario');
const input = document.querySelectorAll('#formulario input');

const expresiones = {
    card: /^[0-9]{4,16}$/,
    cvc: /^[0-9]{3,3}$/,
    nombre: /^[a-zA-Z]+$/,
    lnombre: /^[a-zA-Z]+$/,
    amount: /^[0-9]{1,20}$/,
    ciudad: /^[a-zA-Z\s]{4,30}$/,
    estado: /^[a-zA-Z\s]{4,30}$/,
    postcode: /^[0-9]{3,6}$/,
}

const validarInput = (expresion, e, id) => {
    if (expresion.test(e.target.value)) {
        document.getElementById(id).classList.remove('form-group-incorrecto');
        document.getElementById(id).classList.add('form-group-correcto');
        document.querySelector('#' + id + ' i').classList.add('fa-check-circle');
        document.querySelector('#' + id + ' i').classList.remove('fa-times-circle');
        document.querySelector('#' + id + ' .formulario__input-error').classList.remove('formulario__input-error-activo')

    } else {
        document.getElementById(id).classList.add('form-group-incorrecto');
        document.getElementById(id).classList.remove('form-group-correcto');
        document.querySelector('#' + id + ' i').classList.add('fa-times-circle');
        document.querySelector('#' + id + ' i').classList.remove('fa-check-circle');
        document.querySelector('#' + id + ' .formulario__input-error').classList.add('formulario__input-error-activo')

    }
}

const validarformulario = (e) => {
    switch (e.target.name) {
        case "tarjeta":
            validarInput(expresiones.card, e, 'card')
            break;
        case "cvcnombre":
            validarInput(expresiones.cvc, e, 'cvc')
            break;
        case "Amount":
            validarInput(expresiones.amount, e, 'Amountid')
            break;
        case "first-name":
            validarInput(expresiones.nombre, e, 'Fname')
            break;
        case "Last-name":
             validarInput(expresiones.lnombre, e, 'Lname')
            break;
        case "City":
             validarInput(expresiones.ciudad, e, 'Cityd')
            break;
        case "state":
            validarInput(expresiones.estado, e, 'Stateid')

            break;
        case "Postal-code":
            validarInput(expresiones.postcode, e, 'Postaid')

            break;
    }
}

input.forEach((input) => {
    input.addEventListener('keyup', validarformulario);
    input.addEventListener('blur', validarformulario);

});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
});

let form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event)

    let hayErrores = false;
    for (let i = 0; i < event.target.length; i++) {
        const input = event.target[i];
        if ((input.tagName === 'INPUT' && input.type !== 'radio') || input.tagName === 'SELECT' || input.tagName === 'TEXTAREA') {
            if (input.value === '' || input.value === null) {
                hayErrores = true;
                input.className = 'form-control is-error';
            } else {
                input.className = 'form-control';
            }
        }
    }
    const alerta = document.querySelector("#alerta");
    if (hayErrores) {
        alerta.className = "alert alert-danger mt-3 visible";
    } else {
        alerta.className = "alert alert-danger mt-3 no-visible";
    }
});

