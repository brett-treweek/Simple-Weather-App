const key = '7ab7e1141f7f2e8aa639df16840788da';
const searchButton = document.querySelector('#searchBtn');
const searchBox = document.querySelector('#searchInput');
const cityHeading = document.querySelector('#city');
const cityDate = document.querySelector('#date');
const wind = document.querySelector('#wind');
const uv = document.querySelector('#uv');
const humidity = document.querySelector('#humidity');
const icon = document.querySelector('#icon');
const temp = document.querySelector('#temp');




searchBox.addEventListener('keypress', setCity)
searchButton.addEventListener('click', getWeather);

function setCity(enter){
    if (enter.keyCode == 13) {
        getWeather()
    }
}

function getWeather(){
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
            // var degree = data.current.wind_dir;
            cityDate.innerText = timestamp.format('dddd Do MMMM');
            temp.innerText =' ' + Math.round(data.current.temp);
            icon.innerHTML = '<img src= ./assets/weatherIcons/'+ data.current.weather[0].icon+'.png>';
            wind.innerText = data.current.wind_speed + ' m/s';
            uv.innerText = data.current.uvi;
            humidity.innerText = data.current.humidity + ' %';
            


            const day1 = document.querySelector('#day1')
            const day2 = document.querySelector('#day2')
            const day3 = document.querySelector('#day3')
            const day4 = document.querySelector('#day4')
            const day5 = document.querySelector('#day5')
            
            day1.firstElementChild.textContent = moment.unix(data.daily[1].dt).format('dddd Do MMMM')
            day2.firstElementChild.textContent = moment.unix(data.daily[2].dt).format('dddd Do MMMM')
            day3.firstElementChild.textContent = moment.unix(data.daily[3].dt).format('dddd Do MMMM')
            day4.firstElementChild.textContent = moment.unix(data.daily[4].dt).format('dddd Do MMMM')
            day5.firstElementChild.textContent = moment.unix(data.daily[5].dt).format('dddd Do MMMM')
            
            day1.children[2].append(' '+ Math.round(data.daily[1].temp.max)+'\u00B0'+'C')
            day2.children[2].append(' '+ Math.round(data.daily[2].temp.max)+'\u00B0'+'C')
            day3.children[2].append(' '+ Math.round(data.daily[3].temp.max)+'\u00B0'+'C')
            day4.children[2].append(' '+ Math.round(data.daily[4].temp.max)+'\u00B0'+'C')
            day5.children[2].append(' '+ Math.round(data.daily[5].temp.max)+'\u00B0'+'C')

            day1.children[3].append(' ' +Math.round(data.daily[1].wind_speed)+ ' m/s')
            day2.children[3].append(' ' +Math.round(data.daily[2].wind_speed)+ ' m/s')
            day3.children[3].append(' ' +Math.round(data.daily[3].wind_speed)+ ' m/s')
            day4.children[3].append(' ' +Math.round(data.daily[4].wind_speed)+ ' m/s')
            day5.children[3].append(' ' +Math.round(data.daily[5].wind_speed)+ ' m/s')

            day1.children[4].append(' '+ data.daily[1].humidity+'%')
            day2.children[4].append(' '+ data.daily[2].humidity+'%')
            day3.children[4].append(' '+ data.daily[3].humidity+'%')
            day4.children[4].append(' '+ data.daily[4].humidity+'%')
            day5.children[4].append(' '+ data.daily[5].humidity+'%')

            day1.children[1].innerHTML = "<img src= ./assets/weatherIcons/"+data.daily[1].weather[0].icon+".png>";
            day2.children[1].innerHTML = "<img src= ./assets/weatherIcons/"+data.daily[2].weather[0].icon+".png>";
            day3.children[1].innerHTML = "<img src= ./assets/weatherIcons/"+data.daily[3].weather[0].icon+".png>";
            day4.children[1].innerHTML = "<img src= ./assets/weatherIcons/"+data.daily[4].weather[0].icon+".png>";
            day5.children[1].innerHTML = "<img src= ./assets/weatherIcons/"+data.daily[5].weather[0].icon+".png>";






            

        }
  
)})
};
























// var fiveDayArray = [day1, day2, day3, day4, day5]

//  for (let i = 1; i < data.daily[5]; i++) {
//                 const dayArrayElement = fiveDayArray[index];
//                 console.log(dayArrayElement)
//              for (let index = 0; index < fiveDayArray.length; index++) {
                
//                 dayArrayElement.firstChild.innerText = data.daily[i].temp.max; 

// }}
























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









