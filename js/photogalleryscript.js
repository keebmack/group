$(document).ready(function() {
  const lightbox = $('.lightbox');
  const lightboxImage = $('#lightbox-image');

  const images = [
    'images/PointParkPioneersLogo.png',
    'images/PPUcampus1.jpg',
    'images/PPUcampus2.jpg',
    'images/PPUcampus3.jpg',
    'images/PPUcampus4.jpg',
    'images/PPUcampus5.jpg',
  ];
  let currentIndex = 0;

  function openLightbox(index) {
    lightboxImage.attr('src', images[index]);
    lightbox.addClass('show');
    currentIndex = index;
  }

  function closeLightbox() {
    lightbox.removeClass('show');
  }

  function showPreviousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImage.attr('src', images[currentIndex]);
  }

  function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImage.attr('src', images[currentIndex]);
  }

  $(document).on('click', '.gallery-item img', function() {
    const index = $(this).data('index');
    openLightbox(index);
  });

  lightbox.on('click', function(event) {
    const targetClass = event.target.className;
    if (targetClass === 'prev-arrow') {
      showPreviousImage();
    } else if (targetClass === 'next-arrow') {
      showNextImage();
    } else if (targetClass === 'close-btn') {
      closeLightbox();
    }
  });

  lightboxImage.on('click', function(event) {
    event.stopPropagation();
  });
});
