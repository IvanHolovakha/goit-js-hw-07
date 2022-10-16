import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector(".gallery");

createGaleryMarkup(galleryItems);

galleryRef.addEventListener("click", onGalleryItemClick);

function createGaleryMarkup (galleryItems) {
    const markup = galleryItems.map(({preview, original, description}) => {
        return `
            <a class="gallery__item" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                />
            </a>
        `;
    }
).join("");
    galleryRef.insertAdjacentHTML("beforeend", markup);
};
function onGalleryItemClick (event) {
    event.preventDefault();
    if(event.target.nodeName !== "IMG") {
        return;
    }
    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionPosition: "bottom",
        captionDelay: 250,
    });
}