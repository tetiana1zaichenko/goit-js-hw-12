import axios from 'axios';
import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});


function imageTemplate(image) {
  const { webformatURL, largeImageURL, tags, likes, views, comments, downloads} = image;
    return `
    <div class="image-card">
    <a href="${largeImageURL}" class="gallery-link">
  <div class="image-container">
    <img
      src="${webformatURL}"
      alt="${tags}"
    />
  </div>
  </a>
<div class="image-body">
  <div class="image-column">
    <p class="image-info">Likes</p>
    <p class="image-value">${likes}</p>
  </div>
  <div class="image-column">
    <p class="image-info">Views</p>
    <p class="image-value">${views}</p>
  </div>
  <div class="image-column">
    <p class="image-info">Comments</p>
    <p class="image-value">${comments}</p>
  </div>
  <div class="image-column">
    <p class="image-info">Downloads</p>
    <p class="image-value">${downloads}</p>
  </div>
</div>
</div>`;
}

export function renderImages(images) {
    console.log(images);
    const markup = images
        .map((image) => imageTemplate(image))
        .join(""); 
    gallery.innerHTML = markup;

  lightbox.refresh(); 
};

export function renderMoreImages(images) {
    console.log(images);
    const markup = images
        .map((image) => imageTemplate(image))
        .join(""); 
    gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh(); 
}


