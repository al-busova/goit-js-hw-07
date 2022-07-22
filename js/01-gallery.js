import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBoxMarkup = document.querySelector(".gallery");
galleryBoxMarkup.insertAdjacentHTML(
  "beforeend",
  createCollectionOfImage(galleryItems)
);
galleryBoxMarkup.addEventListener("click", openOriginImage);

function createCollectionOfImage(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function openOriginImage(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  const linkOriginImage = e.target.dataset.source;
  console.log(linkOriginImage);
  const modalForBigImage = basicLightbox.create(`
    <img src="${linkOriginImage}" width="800" height="600">
    `);
  modalForBigImage.show();
  
  if (modalForBigImage.visible()) {
    document.addEventListener("keydown", closeBigImageEscape);
  }

  function closeBigImageEscape(e) {
    if (e.code === "Escape") {
      modalForBigImage.close();
      document.removeEventListener("keydown", closeBigImageEscape);
    }
  }
}
