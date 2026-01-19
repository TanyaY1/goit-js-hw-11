import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form");
const input = form.querySelector("input[name='search-text']");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const query = input.value.trim();
     if (!query) {
        iziToast.warning({
        title: "Warning",
        message: "Please enter a search term!",
        });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const response = await getImagesByQuery(query);
    const images = response.data.hits;

    if (images.length === 0) {
      iziToast.info({
        title: "No results",
        message: "Sorry, there are no images matching your search query. Please try again!",
      });
    } else {
      createGallery(images);
    }
  } catch (error) {
    console.error(error);
    iziToast.error({
      title: "Error",
      message: "Something went wrong. Please try again later!",
    });
  } finally {
    hideLoader();
  }
});
