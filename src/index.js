// Show date
let now = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
let day = days[now.getDay()];
let hours = now.getHours();
if (hours < 10){
    hours = `0${hours}`;
};
let minutes = now.getMinutes();
if (minutes < 10){
    minutes = `0${minutes}`;
};
let dateTimeMessage = `${day} ${hours}:${minutes}`;
// console.log(dateTimeMessage);

let dateTime = document.querySelector("#date-time");
dateTime.innerHTML = dateTimeMessage;

// Show city

function getTemperatureCity(response){
    document.querySelector("#temp").innerHTML = Math.round(response.data.main.temp);
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#humidity").innerHTML = `Humidity: ${response.data.main.humidity}%`;
    document.querySelector("#description").innerHTML = response.data.weather[0].main;
    document.querySelector("#wind-speed").innerHTML = `Wind speed: ${response.data.wind.speed}km/h`;
   

}
function search(city){

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(getTemperatureCity);

}

function inputCity(event){
    event.preventDefault();
    let city = document.querySelector("#input-city").value;
    search(city);
}

let apiKey = "3324937c27278e13f542f63f7e3df9b5";
let formSearch = document.querySelector("#form-search");
formSearch.addEventListener("submit", inputCity);

function searchPosition(position){
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getTemperatureCity);
    
}

function showCurrentLocaitonTemperature(event){
event.preventDefault();
navigator.geolocation.getCurrentPosition(searchPosition);
}

let currentLocation = document.querySelector("#current");
currentLocation.addEventListener("click", showCurrentLocaitonTemperature);

search("Kyiv");

// // show currecnt position
// function showCityName(response){
//     let city = document.querySelector("#city")
//     city.innerHTML = response.data.name;
// }
    // function showTemperature(response){
    //   let temperature = Math.round(response.data.main.temp);
    //   let temp = document.querySelector("#temp");
    //   temp.innerHTML = temperature;
    // }

    // Show my current position
// function showPosition(position) {
//     let lat = position.coords.latitude;
//     let lon = position.coords.longitude;
//     let apiKey = "3324937c27278e13f542f63f7e3df9b5";
//     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
//     axios.get(apiUrl).then(showCityName);
//     // axios.get(apiUrl).then(showTemperature);
// }
//     navigator.geolocation.getCurrentPosition(showPosition);
 
