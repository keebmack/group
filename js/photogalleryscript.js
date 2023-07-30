$(document).ready(function() {
    const lightbox = $('.lightbox');
    const lightboxImage = $('#lightbox-image');
  
    $('.gallery-item').on('click', function() {
      const images = [
        'C:\Users\ryank\Documents\test\group\images\PointParkPioneersLogo.png',
        'path/to/image2.jpg',
        'path/to/image3.jpg',
        'path/to/image4.jpg',
      ];
  
      const index = $(this).index();
      lightboxImage.attr('src', images[index]);
      lightbox.addClass('show');
    });
  
    lightbox.on('click', function() {
      lightbox.removeClass('show');
    });
  });