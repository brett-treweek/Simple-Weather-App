const key = '7ab7e1141f7f2e8aa639df16840788da';
const searchButton = document.querySelector('#searchBtn');
const cityHeading = document.querySelector('#city');
const cityDate = document.querySelector('#date');
const wind = document.querySelector('#wind');
const uv = document.querySelector('#uv');
const humidity = document.querySelector('#humidity');
const icon = document.querySelector('#icon');
const temp = document.querySelector('#temp');
// const m = moment();




searchButton.addEventListener('click', function(){

const citySearch = document.querySelector('#searchInput');
const city = citySearch.value;
const base = 'https://api.openweathermap.org/data/2.5/weather';
const query = `?q=${city}&units=metric&appid=${key}`;

fetch(base + query)
  .then(function (response) {
    return response.json();})
  .then(function (data) {
    cityHeading.innerText = data.name + ' ';
    const cityLat = data.coord.lat;
    const cityLon = data.coord.lon;
    const oneBase = 'https://api.openweathermap.org/data/2.5/onecall';
    const oneQuery = `?lat=${cityLat}&lon=${cityLon}&exclude=minutely,hourly&units=metric&appid=${key}`;
        fetch(oneBase + oneQuery)
        .then(function (response) {
            return response.json();})
        .then(function (data) {
            console.log(data);
            var date = (data.current.dt);
            var timestamp = moment.unix(date);
            var degree = data.current.wind_dir;
            temp.innerText =' ' +data.current.temp;
            cityDate.innerText = timestamp.format('dddd Do MMMM');
            wind.innerText = data.current.wind_speed + 'm/s';
            uv.innerText = data.current.uvi;
            humidity.innerText = data.current.humidity + '%';
            
            
  });
});
});

// console.log(timestamp.format('dddd Do MMMM'));
//             function  windDirection(degree){
//                 if (degree>337.5) return 'Northerly';
//                 if (degree>292.5) return 'North Westerly';
//                 if (degree>247.5) return 'Westerly';
//                 if (degree>202.5) return 'South Westerly';
//                 if (degree>157.5) return 'Southerly';
//                 if (degree>122.5) return 'South Easterly';
//                 if (degree>67.5) return 'Easterly';
//                 if (degree>22.5) return 'North Easterly';
//                 return 'Northerly';
//             }

// console.log( timestamp.format("HH/mm/ss") );



// daily[0].dt




// console.log(data.main.temp);


// icon fetch------------------------------------
// icon.innerText = data.weather[0].icon;
// http://openweathermap.org/img/wn/10d@2x.png









