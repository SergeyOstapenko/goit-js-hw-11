import Notiflix from 'notiflix';
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

function createMarkup(arr) {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
  // console.log(arr);
  if (arr.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
    return;
  } else if (arr.length >= 2) {
    createList(arr);
  } else {
    createCard(arr);
  }
}

function createList(arr) {
  const listOfCountry = arr
    .map(elem => {
      return ` 
       <li class="country-list__item">
    <img class="card-img" src="${elem.flags.svg}" alt="${elem.name}" width="100">
    <h2 class="country-list__text">${elem.name}</h2>
  </li>
  `;
    })
    .join('');

  countryList.innerHTML = listOfCountry;
}

function createCard(arr) {
  const markup = `<h2 class="title">
            <img class="image-country"  src="${arr[0].flags.svg}" alt="${
    arr[0].name
  }" width="60">${arr[0].name}
          </h2>
          <p class="country-text"> <span class="span-text" >Capital: </span>${
            arr[0].capital
          }</p>
          <p class="country-text"> <span class="span-text">Population: </span>${
            arr[0].population
          }</p>
            <p class="country-text"> <span class="span-text">Languages: </span>${arr[0].languages
              .map(item => item.name)
              .join(', ')}</p>`;
  countryInfo.innerHTML = markup;
}

export { createMarkup, countryList, countryInfo };