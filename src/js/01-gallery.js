import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// console.log(galleryItems);

const makeDivItemMarkup = img => {
    const { preview, original, description } = img;
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/></a>`;
}

const gall = document.querySelector('.gallery');
// console.log(gall);

const makeDivItemRows = galleryItems
    .map(makeDivItemMarkup)
    .join('');

gall.insertAdjacentHTML("afterbegin", makeDivItemRows);

gall.addEventListener("click", (event) => {
    const isImg = event.target.classList.contains('gallery__image');
    if (!isImg) return;
    event.preventDefault();
    // console.log("Dataset.source ", event.target.dataset);
    let lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });
});
