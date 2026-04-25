(function () {
  const lightbox = document.createElement('div');
  lightbox.className = 'image-lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', 'Expanded trip photo');

  lightbox.innerHTML = `
    <div class="image-lightbox_content">
      <button class="image-lightbox_close" type="button" aria-label="Close expanded image">&times;</button>
      <img class="image-lightbox_image" src="" alt="" />
      <p class="image-lightbox_caption"></p>
    </div>
  `;

  document.body.appendChild(lightbox);

  const lightboxImage = lightbox.querySelector('.image-lightbox_image');
  const lightboxCaption = lightbox.querySelector('.image-lightbox_caption');
  const closeButton = lightbox.querySelector('.image-lightbox_close');
  let lastFocusedItem = null;

  function getPhotoData(target) {
    const dayPhoto = target.closest('.day-photo');

    if (dayPhoto) {
      const image = dayPhoto.querySelector('img');
      const caption = dayPhoto.querySelector('figcaption');

      if (!image) {
        return null;
      }

      return {
        image: image,
        caption: caption ? caption.textContent : image.alt,
        focusItem: dayPhoto
      };
    }

    if (target.matches('.map-info_photos img')) {
      return {
        image: target,
        caption: target.alt,
        focusItem: target
      };
    }

    return null;
  }

  function openLightbox(photoData) {
    lastFocusedItem = photoData.focusItem;
    lightboxImage.src = photoData.image.src;
    lightboxImage.alt = photoData.image.alt;
    lightboxCaption.textContent = photoData.caption;
    lightbox.classList.add('is-open');
    closeButton.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightboxImage.src = '';

    if (lastFocusedItem) {
      lastFocusedItem.focus();
    }
  }

  document.addEventListener('click', function (event) {
    const photoData = getPhotoData(event.target);

    if (photoData) {
      openLightbox(photoData);
    }
  });

  document.addEventListener('keydown', function (event) {
    const photoData = getPhotoData(event.target);

    if (photoData && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      openLightbox(photoData);
    }

    if (event.key === 'Escape' && lightbox.classList.contains('is-open')) {
      closeLightbox();
    }
  });

  closeButton.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', function (event) {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
})();
