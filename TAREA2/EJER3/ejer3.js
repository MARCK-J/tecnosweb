$(document).ready(function () {
    $('#contactForm').submit(function (e) {
        e.preventDefault();

        // Obtener los datos del formulario
        var formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        };

        // Validar los campos del formulario
        if (formData.name === '' || formData.email === '' || formData.message === '') {
            $('#errorMessage').text('Por favor, complete todos los campos.');
            $('#successMessage').text('');
            return;
        }

        // Validar el formato del correo electrónico
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(formData.email)) {
            $('#errorMessage').text('El correo electrónico no es válido.');
            $('#successMessage').text('');
            return;
        }
    });
});

