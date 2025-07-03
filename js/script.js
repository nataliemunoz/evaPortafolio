// Validación del formulario con jQuery
$('#contactForm').on('submit', function(e) {
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    
    if (name && email && message) {
        alert('¡Mensaje enviado exitosamente!');
    } else {
        alert('Por favor, completa todos los campos.');
    }
});