import axios from "axios";

const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
const SEARCH_URL = 'https://api.thecatapi.com/v1/images/search'
const API_KEY = 'live_odVTfJ7MUCR6hXf2p7YDiHCzrrbGA6VzE3WyvMJyIMVwG3DGv8llaQ5e14MIvVcp';

axios.defaults.headers.common["x-api-key"] = API_KEY;
axios.defaults.baseURL = BASE_URL;



export function fetchBreeds() {
  return axios.get(BASE_URL);
}

export function fetchCatByBreed(breedId) {
  return axios.get(`${SEARCH_URL}?breed_ids=${breedId}`);
}
// export { fetchBreeds, fetchCatByBreed };