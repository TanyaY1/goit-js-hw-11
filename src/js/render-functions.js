import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const lightbox = new SimpleLightbox(".gallery a");

export function createGallery(images) {
  const markup = images
    .map(
      (img) => `
    <li>
      <a href="${img.largeImageURL}">
        <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy"/>
      </a>
      <p>Likes: ${img.likes} | Views: ${img.views} | Comments: ${img.comments} | Downloads: ${img.downloads}</p>
    </li>
  `
    )
    .join("");

  galleryContainer.insertAdjacentHTML("beforeend", markup);
  lightbox.refresh(); 
}

export function clearGallery() {
  galleryContainer.innerHTML = "";
}

export function showLoader() {
  galleryContainer.classList.add("loading");
}

export function hideLoader() {
  galleryContainer.classList.remove("loading");
}
