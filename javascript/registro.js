// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencia al formulario
    var formulario = document.getElementById('registro-form');
  
    // Agregar evento de escucha al envío del formulario
    formulario.addEventListener('submit', function(event) {
      // Prevenir el comportamiento predeterminado de envío del formulario
      event.preventDefault();
  
      // Realizar cualquier otra acción necesaria, como enviar datos a un servidor
  
      // Mostrar el mensaje de alerta
      alert('¡Registro completado!');
  
      // Restablecer el formulario
      formulario.reset();
    });
  });
  