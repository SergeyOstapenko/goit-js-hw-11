import Notiflix from 'notiflix';
export default function fetchCountries(name) {
  const BASE_URL = 'https://restcountries.com/v2/name/';
  const searchUrl = '?fields=name,capital,population,flags,languages';
  return fetch(`${BASE_URL}${name}${searchUrl}`);
}
