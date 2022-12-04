import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector(".gallery");

createGaleryMarkup(galleryItems);

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

const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionPosition: "bottom",
        captionDelay: 250,
    });