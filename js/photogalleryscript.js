$(document).ready(function() {
    const lightbox = $('.lightbox');
    const lightboxImage = $('#lightbox-image');
    const images = [
      'images/PointParkPioneersLogo.png',
      'images/PPUcampus1.jpg',
      'images/PPUcampus2.jpg',
    ];
  
    $('.gallery-item').on('click', function() {
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