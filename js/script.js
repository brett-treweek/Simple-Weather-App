const key = '7ab7e1141f7f2e8aa639df16840788da';
const temp = document.querySelector('#temp');
const searchButton = document.querySelector('#searchBtn');


searchButton.addEventListener('click', function(){

const citySearch = document.querySelector('#searchInput');
const city = citySearch.value;
const base = 'https://api.openweathermap.org/data/2.5/weather';
const query = `?q=${city}&units=metric&appid=${key}`;

fetch(base + query)
  .then(function (response) {
      console.log(response)
    return response.json();
  })
  .then(function (data) {
    console.log(data)
    console.log(data.main.temp);
    temp.innerText =' ' +data.main.temp;
  });
});

















