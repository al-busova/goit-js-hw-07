import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryBoxMarkup = document.querySelector(".gallery");
galleryBoxMarkup.insertAdjacentHTML(
  "beforeend",
  createCollectionOfImage(galleryItems)
);

function createCollectionOfImage(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`;
    })
    .join("");
}

const lightBoxGallery = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
