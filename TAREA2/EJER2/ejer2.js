$(document).ready(function () {
  // Realiza una solicitud AJAX para cargar la información de las imágenes desde un archivo JSON
  $.ajax({
      url: 'ejer2.json',
      dataType: 'json',
      success: function (data) {
          var carouselInner = $('#carouselInner');
          var positionIndicator = $('#positionIndicator');
          
          // Recorre las imágenes y crea los elementos del carrusel
          $.each(data, function (index, image) {
              var activeClass = index === 0 ? 'active' : '';
              carouselInner.append(`
                  <div class="carousel-item ${activeClass}">
                      <img src="${image.url}" class="d-block w-100" alt="${image.alt}">
                      <div class="carousel-caption">
                          <h5>${image.title}</h5>
                          <p>${image.description}</p>
                      </div>
                  </div>
              `);

              // Crea indicadores de posición
              positionIndicator.append(`
                  <span data-target="#imageCarousel" data-slide-to="${index}" class="${activeClass}"></span>
              `);
          });

          // Inicializa el carrusel
          $('#imageCarousel').carousel();
      }
  });
});

