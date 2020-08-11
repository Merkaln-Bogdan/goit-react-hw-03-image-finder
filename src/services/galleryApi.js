import axios from "axios";
const fetchGalleryWithQuery = (query, page) => {
  const per_page = 12;
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const baseUrl =
    "https://pixabay.com/api/?image_type=photo&orientation=horizontal";
  const requestParams = `&q=${query}&page=${page}&per_page=${per_page}&key=`;
  const key = "16514596-ae86f2ec8e88e471e6f58eaaa";

  return axios
    .get(proxyUrl + baseUrl + requestParams + key)
    .then((response) => response.data.hits);
};
export default {
  fetchGalleryWithQuery,
};
