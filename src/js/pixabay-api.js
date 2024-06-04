const API_KEY = '44162720-a316c36f9e5620bf7580caa42';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImg(searchQuery) {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data.hits;
    });
}
