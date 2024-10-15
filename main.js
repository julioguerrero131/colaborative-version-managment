function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    let errorMessage = document.getElementById('error-message');

    if (name === "" || email === "" || subject === "" || message === "") {
        errorMessage.textContent = "Por favor, rellena todos los campos.";
        return false;
    }

    // Validación básica de correo electrónico
    if (!validateEmail(email)) {
        errorMessage.textContent = "Por favor, ingresa un correo electrónico válido.";
        return false;
    }

    errorMessage.textContent = "";
    alert("Formulario enviado con éxito");
    return true;
}

function validateEmail(email) {
    // Expresión regular simple para validar correos electrónicos
    let regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}
