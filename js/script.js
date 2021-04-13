// Variables / Selectors-------------------------------------

const key = '7ab7e1141f7f2e8aa639df16840788da';
const searchButton = document.querySelector('#searchBtn');
const searchBox = document.querySelector('#searchInput');
const cityHeading = document.querySelector('#city');
const cityDate = document.querySelector('#date');
const wind = document.querySelector('#wind');
const uv = document.querySelector('#uv');
const humidity = document.querySelector('#humidity');
const icon = document.querySelector('#icon');
const description = document.querySelector('#description');
const temp = document.querySelector('#temp');
var list = document.querySelector('.list')

var dailyWeather;
var searchHistory = JSON.parse(localStorage.getItem('city')) || [];



// Event listeners--------------------------------------------

searchBox.addEventListener('keypress', setCity);
searchButton.addEventListener('click', search);
const ul = document.querySelector('#ul');
ul.addEventListener('click', historyClick);
// if(searchHistory.length > 0){
    
//     }
 
function search(){
    ul.innerHTML = '';
    getWeather();
    searchBox.value = '';
}

function historyClick(e){
    ul.innerHTML = '';
    var text = e.target.textContent;
    searchBox.value = text;
    console.log(text);
    getWeather();
    searchBox.value = '';
}

function setCity(enter){
    if (enter.keyCode == 13) {
        ul.innerHTML = '';
        getWeather();
        searchBox.value = ''
    }
}

// History function--------------------------------------------

    



function setHistory(){
  
    for (let i = 0; i < searchHistory.length; i++) {
        var li = document.createElement('li')
        const element = searchHistory[i];
        li.textContent = element;
        ul.appendChild(li);
        li.classList.add('list')
    }

    

    console.log(searchHistory)
}   

// localStorage.clear()


setHistory();
getWeather();



// Fetch requests / History for-loop / Local Storage / City name-------------

function getWeather(){
    
    var city = searchBox.value;

    if(city.length>0){
        searchHistory.unshift(searchBox.value);
        if(searchHistory.length > 6){
            searchHistory.pop()
        };
        localStorage.setItem('city', JSON.stringify(searchHistory))
        setHistory();
    }
    else if(searchHistory.length == 0){
        city = 'Perth'
    }
    else 
        city=searchHistory[searchHistory.length-1]
    
    console.log(city)

    const base = 'https://api.openweathermap.org/data/2.5/weather';
    const query = `?q=${city}&units=metric&appid=${key}`;
    
    fetch(base + query)
        .then(function (response) {
        return response.json();})
        .then(function (cityData) {

            cityHeading.innerText = cityData.name + ' ';
            const cityLat = cityData.coord.lat;
            const cityLon = cityData.coord.lon;
            const oneBase = 'https://api.openweathermap.org/data/2.5/onecall';
            const oneQuery = `?lat=${cityLat}&lon=${cityLon}&exclude=minutely,hourly&units=metric&appid=${key}`;

    fetch(oneBase + oneQuery)
        .then(function (response) {
            return response.json();})
        .then(function (data) {
            
            dailyWeather = data;
            console.log(dailyWeather);
            todaysWeather();
            forecast();
        })
        
    })
};


// Todays weather function----------------------------------------------

function todaysWeather(){

    temp.innerText =' ' + Math.round(dailyWeather.current.temp);
    var date = (dailyWeather.current.dt);
    var timestamp = moment.unix(date);
    cityDate.innerText = timestamp.format('dddd Do MMMM');
    icon.innerHTML = '<img src= ./assets/weatherIcons/'+ dailyWeather.current.weather[0].icon+'.png>';
    description.innerText = dailyWeather.current.weather[0].description;
    uv.innerText = dailyWeather.current.uvi;
    humidity.innerText = dailyWeather.current.humidity + ' %';
    var wind_dir = dailyWeather.current.wind_deg;

    if(wind_dir<22.5){
        wind_dir = 'N'
    }else if(wind_dir<67.5){
        wind_dir = 'NE'
    }else if(wind_dir<112.5){
        wind_dir = 'E'
    }else if(wind_dir<157.5){
        wind_dir = 'SE'
    }else if(wind_dir<202.5){
        wind_dir = 'S'
    }else if(wind_dir<247.5){
        wind_dir = 'SW'
    }else if(wind_dir<292.5){
        wind_dir = 'W'
    }else if(wind_dir<337.5){
        wind_dir = 'NW'
    }else wind_dir = 'N';                          

    wind.innerText = Math.round(dailyWeather.current.wind_speed) + ' m/s '+ wind_dir;
}

//Five Day Forecast Function------------------------------------------

function forecast(){

            const day1 = document.querySelector('#day1')
            const day2 = document.querySelector('#day2')
            const day3 = document.querySelector('#day3')
            const day4 = document.querySelector('#day4')
            const day5 = document.querySelector('#day5')
            
            day1.firstElementChild.textContent = moment.unix(dailyWeather.daily[1].dt).format('dddd Do MMMM')
            day2.firstElementChild.textContent = moment.unix(dailyWeather.daily[2].dt).format('dddd Do MMMM')
            day3.firstElementChild.textContent = moment.unix(dailyWeather.daily[3].dt).format('dddd Do MMMM')
            day4.firstElementChild.textContent = moment.unix(dailyWeather.daily[4].dt).format('dddd Do MMMM')
            day5.firstElementChild.textContent = moment.unix(dailyWeather.daily[5].dt).format('dddd Do MMMM')

            day1.children[1].innerHTML = "<img src= ./assets/weatherIcons/"+dailyWeather.daily[1].weather[0].icon+".png>";
            day2.children[1].innerHTML = "<img src= ./assets/weatherIcons/"+dailyWeather.daily[2].weather[0].icon+".png>";
            day3.children[1].innerHTML = "<img src= ./assets/weatherIcons/"+dailyWeather.daily[3].weather[0].icon+".png>";
            day4.children[1].innerHTML = "<img src= ./assets/weatherIcons/"+dailyWeather.daily[4].weather[0].icon+".png>";
            day5.children[1].innerHTML = "<img src= ./assets/weatherIcons/"+dailyWeather.daily[5].weather[0].icon+".png>";
            
            day1.children[2].innerText = 'Temp '+ Math.round(dailyWeather.daily[1].temp.max)+'\u00B0'+'C'
            day2.children[2].innerText ='Temp '+ Math.round(dailyWeather.daily[2].temp.max)+'\u00B0'+'C'
            day3.children[2].innerText ='Temp '+ Math.round(dailyWeather.daily[3].temp.max)+'\u00B0'+'C'
            day4.children[2].innerText ='Temp '+ Math.round(dailyWeather.daily[4].temp.max)+'\u00B0'+'C'
            day5.children[2].innerText ='Temp '+ Math.round(dailyWeather.daily[5].temp.max)+'\u00B0'+'C'

            day1.children[3].innerText ='Wind ' +Math.round(dailyWeather.daily[1].wind_speed)+ ' m/s'
            day2.children[3].innerText ='Wind ' +Math.round(dailyWeather.daily[2].wind_speed)+ ' m/s'
            day3.children[3].innerText ='Wind ' +Math.round(dailyWeather.daily[3].wind_speed)+ ' m/s'
            day4.children[3].innerText ='Wind ' +Math.round(dailyWeather.daily[4].wind_speed)+ ' m/s'
            day5.children[3].innerText ='Wind ' +Math.round(dailyWeather.daily[5].wind_speed)+ ' m/s'

            day1.children[4].innerText ='Humidity '+ dailyWeather.daily[1].humidity+'%'
            day2.children[4].innerText ='Humidity '+ dailyWeather.daily[2].humidity+'%'
            day3.children[4].innerText ='Humidity '+ dailyWeather.daily[3].humidity+'%'
            day4.children[4].innerText ='Humidity '+ dailyWeather.daily[4].humidity+'%'
            day5.children[4].innerText ='Humidity '+ dailyWeather.daily[5].humidity+'%'

           } 


            



       


