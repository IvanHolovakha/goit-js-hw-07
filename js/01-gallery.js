import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
const galleryRef = document.querySelector(".gallery");

createGaleryMarkup(galleryItems);

galleryRef.addEventListener("click", onGalleryItemClick);

function createGaleryMarkup (galleryItems) {
    const markup = galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>
        `;
    }
).join("");
    galleryRef.insertAdjacentHTML("beforeend", markup);
}
function onGalleryItemClick (event) {
    event.preventDefault();
    if(event.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(
        `<img src="${event.target.dataset.source}"/>`,
        {
            onShow: (instance) => {
                document.addEventListener("keydown", onCloseKeyEscape)
            },
            onClose: (instance) => {
                document.removeEventListener("keydown", onCloseKeyEscape)
            },
        });
    instance.show();
    function onCloseKeyEscape (event) {
        if(event.code === "Escape") {
            instance.close();
        }
    }
}