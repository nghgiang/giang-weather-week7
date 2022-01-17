//display the current date and time

let dateTime = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[dateTime.getDay()];
document.getElementById("day-name").innerHTML = `${day}`;

let hour = dateTime.getHours();
let mins = dateTime.getMinutes();
if (mins < 10) {
  mins = `0${mins}`;
}

if (hour < 10) {
  hour = `0${hour}`;
}

let realTime = `${hour}:${mins}`;
document.getElementById("real-time").innerHTML = `${realTime}`;

//Add a search engine

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#input-city-here");
  let cityName = `${searchInput.value}`;
  document.querySelector("#city-name").innerHTML = `${searchInput.value}`;
  let apiKey = "d2f3282615c12b4088e624b5c0dbf8d2";
  let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  axios.get(`${apiLink}`).then(showTemp);
}

let searchForm = document.querySelector("#search-box");
searchForm.addEventListener("submit", searchCity);

function showTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#currentTemp");
  currentTemp.innerHTML = `${temperature}°C`;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
  document.querySelector(
    "#wind"
  ).innerHTML = `Wind: Math.Round${response.data.wind.speed} km/h`;
  document.querySelector(
    "#humidity"
  ).innerHTML = `Humidity: ${response.data.main.humidity} %`;
  document
    .querySelector("#icon")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
}
