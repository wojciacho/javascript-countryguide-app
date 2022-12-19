const searchBtn = document.getElementById("search-btn");
const countryInput = document.getElementById("country");
const result = document.getElementById("result");

function getData() {
  let countryName = countryInput.value;

  const URL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => showCountry(data));
}

function showCountry(data) {
  result.innerHTML = `
          <img src="${data[0].flags.svg}" class="flag-img">
          <h2>${data[0].name.common}</h2>
          <div class="wrapper">
              <div class="data-wrapper">
                  <h4>Capital:</h4>
                  <span>${data[0].capital[0]}</span>
              </div>
          </div>
          <div class="wrapper">
              <div class="data-wrapper">
                  <h4>Continent:</h4>
                  <span>${data[0].continents[0]}</span>
              </div>
          </div>
           <div class="wrapper">
              <div class="data-wrapper">
                  <h4>Population:</h4>
                  <span>${data[0].population}</span>
              </div>
          </div>
          <div class="wrapper">
              <div class="data-wrapper">
                  <h4>Currency:</h4>
                  <span>${
                    data[0].currencies[Object.keys(data[0].currencies)].name
                  } - ${Object.keys(data[0].currencies)[0]}</span>
              </div>
          </div>
           <div class="wrapper">
              <div class="data-wrapper">
                  <h4>Common Languages:</h4>
                  <span>${Object.values(data[0].languages)
                    .toString()
                    .split(",")
                    .join(", ")}</span>
              </div>
          </div>
        `;
}

searchBtn.addEventListener("click", () => {
  let country = countryInput.value;
  if (country) {
    getData();
  }
  if (country.length == 0) {
    result.innerHTML = `<h3>The input field cannot be empty</h3>`;
  } else {
    result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
  }
});