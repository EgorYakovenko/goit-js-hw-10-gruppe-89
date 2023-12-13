import { fetchBreeds } from "./cat-api";
import { fetchCatByBreed } from "./cat-api";

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import SlimSelect from 'slim-select';

import { createMarkup, createMarkupCat } from './markup';
import refs from './refs';

refs.selectEl.addEventListener('change', onValueId);
fetchBreeds()
  .then(arr => {load();
    refs.selectEl.innerHTML = '<option value= "" selected disabled>Choose your cat</option> ';
    return (refs.selectEl.innerHTML += createMarkup(arr.data));
  })
  .then(() => slim())
  .catch(fetchError);

function onValueId(e) {
  const id = e.target.value;
  fetchCatByBreed(id)
    .then(obj => {
      load();

      return (refs.catInfoEl.innerHTML = createMarkupCat(obj.data));
    })
    .then(() => success())
    .catch(fetchError);
}
function fetchError() {
  Report.failure(refs.error.textContent, '');
}
function success() {
  Notify.success('Search was successful!', '');
}
function load() {
  refs.selectEl.hidden = false;
  refs.loaderEl.classList.remove('loader');
}

function slim() {
  new SlimSelect({
    select: refs.selectEl,
  });
}























// function fetchBreeds() {
//     return fetch(`${BASE_URL}?api_key=${API_KEY}`).then(response => {
//         if (!response.ok) {
//             throw new Error(response.status);
//         }
        
//         return response.json();
//     });
    
// };
// fetchBreeds()
// console.log(fetchBreeds());

// return fetch(`${BASE_URL}?api_key=${API_KEY}`).then((resp) => {
//     console.log(resp);
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     return resp.json();
//   });


// fetch(`${BASE_URL}?api_key=${API_KEY}`).then(res => console.log(res.json()))


// .then(cat => {console.log(cat)})
// const r = fetch('https://api.thecatapi.com/v1/breeds').then(data => {console.log(data)});


// fetch("https://api.thecatapi.com/v1/breeds").then((res) =>
//   console.log(res)
// );

// console.log(fetchBreeds());
// / fetch("https://rickandmortyapi.com/api/character")
//   .then((res) => {
//     if (res.ok) {
//       return res.json();
//     }

//     throw new Error(res.status);
//   })
//   .then((character) => console.log(character));




