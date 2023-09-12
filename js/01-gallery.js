import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.dir(galleryItems);

// const instance = basicLightbox.create(`
//     <h1>Dynamic Content</h1>
//     <p>You can set the content of the lightbox with JS.</p>
// `);

// console.dir(instance);

const list = document.querySelector(".js-products");

list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
list.addEventListener("click", handleClick);

console.dir(list);

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
  `
    )
    .join("");
}

function handleClick(event) {
  event.preventDefault(); // Забороняємо перезавантаження сторінки
  if (event.target === event.currentTarget) {
    return;
  }
  const largeImageUrl = event.target.dataset.source;

  const instance = basicLightbox.create(`

    <img src="${largeImageUrl}" alt="${event.target.alt}" />

  `);

  instance.show();

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
