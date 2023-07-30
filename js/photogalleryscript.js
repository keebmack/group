$(document).ready(function() {
    const lightbox = $('.lightbox');
    const lightboxImage = $('#lightbox-image');
  
    $('.gallery-item').on('click', function() {
      const images = [
        'images/PointParkPioneersLogo.png',
      ];
  
      const index = $(this).index();
      lightboxImage.attr('src', images[index]);
      lightbox.addClass('show');
    });
  
    lightbox.on('click', function() {
      lightbox.removeClass('show');
    });
    
    lightboxImage.on('click', function(event) {
      event.stopPropagation();
    });
  });