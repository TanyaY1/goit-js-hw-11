import { getImagesByQuery } from "./js/pixabay-api";

getImagesByQuery("cats")
  .then(response => {
    console.log(response.data.hits);
  })
  .catch(error => {
    console.log(error);
  });

//