$(document).ready(function () {
  // Hacer una solicitud AJAX para cargar las opciones desde un archivo JSON
  $.ajax({
      url: 'ejer1.json',
      dataType: 'json',
      success: function (data) {
          // Iterar a través de las opciones y agregarlas al menú desplegable
          data.forEach(function (opcion) {
              var $opcionItem = $('<a class="dropdown-item" href="#">' + opcion.nombre + '</a>');
              $opcionItem.click(function () {
                  alert('Has seleccionado: ' + opcion.nombre);
              });
              $('.dropdown-menu').append($opcionItem);
          });
      },
      error: function () {
          console.error('Error al cargar el archivo JSON');
      }
  });
});

