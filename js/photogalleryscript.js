$(document).ready(function() {
    const lightbox = $('.lightbox');
    const lightboxImage = $('#lightbox-image');
  
    const images = [
      'images/PointParkPioneersLogo.png',
      'images/PPUcampus1.jpg',
      'images/PPUcampus2.jpg',
    ];
  
    function openLightbox(index) {
      lightboxImage.attr('src', images[index]);
      lightbox.addClass('show');
    }
  
    function closeLightbox() {
      lightbox.removeClass('show');
    }
  
    $('.gallery-item img').on('click', function() {
      const index = $(this).data('index');
      openLightbox(index);
    });
  
    lightbox.on('click', function() {
      closeLightbox();
    });
  
    lightboxImage.on('click', function(event) {
      event.stopPropagation();
    });
  });
  