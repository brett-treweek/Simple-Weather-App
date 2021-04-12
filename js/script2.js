// const key = '7ab7e1141f7f2e8aa639df16840788da';
// const searchButton = document.querySelector('#searchBtn');
// const searchBox = document.querySelector('#searchInput');
// const cityHeading = document.querySelector('#city');
// const cityDate = document.querySelector('#date');
// const wind = document.querySelector('#wind');
// const uv = document.querySelector('#uv');
// const humidity = document.querySelector('#humidity');
// const icon = document.querySelector('#icon');
// const temp = document.querySelector('#temp');


// searchBox.addEventListener('keypress', setCity)
// searchButton.addEventListener('click', getWeather);

// function setCity(enter){
//     if (enter.keyCode == 13) {
//         getWeather()
//     }
// }

// function getWeather(){
    
//     if(searchBox.value == ''){
//         cityHeading.innerText = 'Please Enter A City';
//     }else{
    
//     const city = searchBox.value;
//     const base = 'https://api.openweathermap.org/data/2.5/weather';
//     const query = `?q=${city}&units=metric&appid=${key}`;

//     fetch(base + query)
//         .then(function (response) {
//         return response.json();})
//         .then(function (data) {

//             cityHeading.innerText = data.name + ' ';
//             const cityLat = data.coord.lat;
//             const cityLon = data.coord.lon;
//             const oneBase = 'https://api.openweathermap.org/data/2.5/onecall';
//             const oneQuery = `?lat=${cityLat}&lon=${cityLon}&exclude=minutely,hourly&units=metric&appid=${key}`;

//     fetch(oneBase + oneQuery)
//         .then(function (response) {
//             return response.json();})
//         .then(function (data) {

//             var date = (data.current.dt);
//             var timestamp = moment.unix(date);
            

//             cityDate.innerText = timestamp.format('dddd Do MMMM');
//             temp.innerText =' ' + Math.round(data.current.temp);
//             icon.innerHTML = '<img src= ./assets/weatherIcons/'+ data.current.weather[0].icon+'.png>';
//             var wind_dir = data.current.wind_deg;
//             console.log(wind_dir)
//             if(wind_dir<22.5){
//                 wind_dir = 'N'
//             }else if(wind_dir<67.5){
//                 wind_dir = 'NE'
//             }else if(wind_dir<112.5){
//                 wind_dir = 'E'
//             }else if(wind_dir<157.5){
//                 wind_dir = 'SE'
//             }else if(wind_dir<202.5){
//                 wind_dir = 'S'
//             }else if(wind_dir<247.5){
//                 wind_dir = 'SW'
//             }else if(wind_dir<292.5){
//                 wind_dir = 'W'
//             }else if(wind_dir<337.5){
//                 wind_dir = 'NW'
//             }else wind_dir = 'N';

//             wind.innerText = Math.round(data.current.wind_speed) + ' m/s '+ wind_dir;
//             uv.innerText = data.current.uvi;
//             humidity.innerText = data.current.humidity + ' %';
            
//             const day1 = document.querySelector('#day1')
//             const day2 = document.querySelector('#day2')
//             const day3 = document.querySelector('#day3')
//             const day4 = document.querySelector('#day4')
//             const day5 = document.querySelector('#day5')
            
//             day1.firstElementChild.textContent = moment.unix(data.daily[1].dt).format('dddd Do MMMM')
//             day2.firstElementChild.textContent = moment.unix(data.daily[2].dt).format('dddd Do MMMM')
//             day3.firstElementChild.textContent = moment.unix(data.daily[3].dt).format('dddd Do MMMM')
//             day4.firstElementChild.textContent = moment.unix(data.daily[4].dt).format('dddd Do MMMM')
//             day5.firstElementChild.textContent = moment.unix(data.daily[5].dt).format('dddd Do MMMM')

//             day1.children[1].innerHTML = "<img src= ./assets/weatherIcons/"+data.daily[1].weather[0].icon+".png>";
//             day2.children[1].innerHTML = "<img src= ./assets/weatherIcons/"+data.daily[2].weather[0].icon+".png>";
//             day3.children[1].innerHTML = "<img src= ./assets/weatherIcons/"+data.daily[3].weather[0].icon+".png>";
//             day4.children[1].innerHTML = "<img src= ./assets/weatherIcons/"+data.daily[4].weather[0].icon+".png>";
//             day5.children[1].innerHTML = "<img src= ./assets/weatherIcons/"+data.daily[5].weather[0].icon+".png>";
            
//             day1.children[2].append(' '+ Math.round(data.daily[1].temp.max)+'\u00B0'+'C')
//             day2.children[2].append(' '+ Math.round(data.daily[2].temp.max)+'\u00B0'+'C')
//             day3.children[2].append(' '+ Math.round(data.daily[3].temp.max)+'\u00B0'+'C')
//             day4.children[2].append(' '+ Math.round(data.daily[4].temp.max)+'\u00B0'+'C')
//             day5.children[2].append(' '+ Math.round(data.daily[5].temp.max)+'\u00B0'+'C')

//             day1.children[3].append(' ' +Math.round(data.daily[1].wind_speed)+ ' m/s')
//             day2.children[3].append(' ' +Math.round(data.daily[2].wind_speed)+ ' m/s')
//             day3.children[3].append(' ' +Math.round(data.daily[3].wind_speed)+ ' m/s')
//             day4.children[3].append(' ' +Math.round(data.daily[4].wind_speed)+ ' m/s')
//             day5.children[3].append(' ' +Math.round(data.daily[5].wind_speed)+ ' m/s')

//             day1.children[4].append(' '+ data.daily[1].humidity+'%')
//             day2.children[4].append(' '+ data.daily[2].humidity+'%')
//             day3.children[4].append(' '+ data.daily[3].humidity+'%')
//             day4.children[4].append(' '+ data.daily[4].humidity+'%')
//             day5.children[4].append(' '+ data.daily[5].humidity+'%')



//             console.log(data)

            

//             console.log(wind_dir)


//         })
//     })
// }};


