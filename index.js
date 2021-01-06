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