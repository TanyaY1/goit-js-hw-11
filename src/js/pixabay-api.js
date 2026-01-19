import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";

const API_KEY = "54261320-d62ab16d38fae836d0ed4fba4";

export function getImagesByQuery(query) {
  return axios.get("", {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
    },
  });
}
