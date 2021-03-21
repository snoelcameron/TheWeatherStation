// date+time
function showDate() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "Jan.",
    "Feb.",
    "March",
    "Apr.",
    "May",
    "June",
    "July",
    "Aug.",
    "Sept.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];
  let currentDay = days[now.getDay()];
  let currentMonth = months[now.getMonth()];
  let currentDate = now.getDate();
  let currentHour = now.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  let currentMinutes = now.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
  let currentTime = `${currentHour}:${currentMinutes}`;
  return `${currentDay}, ${currentMonth} ${currentDate}, ${currentTime}`;
}

let weatherDate = document.querySelector("#date");
let now = new Date();
weatherDate.innerHTML = showDate(now);

//switch icon
function changeWeatherIcon(icon) {
  let iconElement = "";
  if (icon === "01d" || icon === "01n") {
    iconElement = "images/suncircle.png";
  } else if (
    icon === "02n" ||
    icon === "02d" ||
    icon === "03n" ||
    icon === "03d"
  ) {
    iconElement = "images/suncloudcircle.png";
  } else if (
    icon === "04d" ||
    icon === "04n" ||
    icon === "50d" ||
    icon === "50n"
  ) {
    iconElement = "images/cloudcircle.png";
  } else if (
    icon === "10n" ||
    icon === "10d" ||
    icon === "9n" ||
    icon === "9d"
  ) {
    iconElement = "images/raincircle.png";
  } else if (icon === "11d" || icon === "11n") {
    iconElement = "images/thundercircle.png";
  } else if (icon === "13d" || icon === "13n") {
    iconElement = "images/snowcircle.png";
  }
  return iconElement;
}

//switch backgorund gradietn

function changeBackground(icon) {
  let backgroundGradient = "";
  if (icon === "01d") {
    backgroundGradient = "linear-gradient(#ffc10d, #fe9f00)";
  } else if (icon === "02d") {
    backgroundGradient = "linear-gradient(#ffc10d, #fe9f00)";
  } else if (
    icon === "01n" ||
    icon === "02n" ||
    icon === "03n" ||
    icon === "03d"
  ) {
    backgroundGradient = "linear-gradient(#ffc10d, #fe9f00)";
  } else if (
    icon === "04d" ||
    icon === "04d" ||
    icon === "50n" ||
    icon === "50d"
  ) {
    backgroundGradient = "linear-gradient(#3e7dba, #2d52a7)";
  } else if (
    icon === "09d" ||
    icon === "09n" ||
    icon === "10d" ||
    icon === "10n"
  ) {
    backgroundGradient = "linear-gradient(#a4abbe, #4f5077)";
  } else if (icon === "11d" || icon === "11n") {
    backgroundGradient = "linear-gradient(#a4abbe, #4f5077)";
  } else if (icon === "13d" || icon === "13n") {
    backgroundGradient = "linear-gradient(#83bcc8, #628a9d)";
  }

  return backgroundGradient;
}

//temperature

function showWeather(response) {
  let city = document.querySelector("#city");
  let date = document.querySelector("#date");
  let temperature = document.querySelector("#temperature");
  let description = document.querySelector("#description");
  let humidity = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#wind");
  let iconElement = document.querySelector("#iconLarge");
  let iconForecast = document.querySelector("#cardIcon");
  celsiusTemperature = response.data.main.temp;

  city.innerHTML = response.data.name;
  date.innerHTML = showDate(response.data.dt * 1000);
  temperature.innerHTML = Math.round(celsiusTemperature) + "°";
  description.innerHTML = response.data.weather[0].description;
  humidity.innerHTML = "Humidity: " + response.data.main.humidity + "%";
  windSpeed.innerHTML =
    "Wind speed: " + Math.round(response.data.wind.speed) + " km/h";
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );

  iconElement.setAttribute(
    "src",
    changeWeatherIcon(response.data.weather[0].icon)
  );

  iconForecast.setAttribute2(
    "src",
    changeForecastIcon(response.data.weather[0].icon)
  );

  document.getElementById(
    "backgroundGradient"
  ).style.backgroundImage = changeBackground(response.data.weather[0].icon);
  console.log(response.data.weather[0].icon);
}

//forecast date+time
function forecastDate() {
  let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (currentDay = weekdays[now.getDay()]);
}

let forecastWeatherDate = document.querySelector("#cardWeekday");
let nowDate = new Date();
forecastWeatherDate = forecastDate(nowDate);

function displayForecast(response) {
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = null;
  let forecast = null;
  for (let index = 0; index < 5; index++) {
    forecast = response.data.list[index];
    forecastElement.innerHTML += `
     <div class="col-1 card">
  <div class="card-text">
    <p class="card-temp">${Math.round(forecast.main.temp_max)}°</p>
    <p class="card-day" #cardWeekday>${forecastDate(forecast.dt * 1000)}</p>
     <img src="" alt="Forecast conditions icon" id="cardIcon" width="115px"/>
  </div>
</div>
  `;
  }
}

//forecast switch icon
function changeForecastIcon(icon) {
  let iconForecast = "";
  if (icon === "01d" || icon === "01n") {
    iconForecast = "images/sunsmall.png";
  } else if (icon === "02n" || icon === "02d") {
    iconForecast = "images/sunsmall.png";
  } else if (
    icon === "03d" ||
    icon === "03n" ||
    icon === "04d" ||
    icon === "04n" ||
    icon === "50d" ||
    icon === "50n"
  ) {
    iconForecast = "images/cloudsmall.png";
  } else if (
    icon === "10n" ||
    icon === "10d" ||
    icon === "9n" ||
    icon === "9d"
  ) {
    iconForecast = "images/rainsmall.png";
  } else if (icon === "11d" || icon === "11n") {
    iconForecast = "images/thundersmall.png";
  } else if (icon === "13d" || icon === "13n") {
    iconForecast = "images/snowsmall.png";
  }
  return iconForecast;
}

//search city

function search(city) {
  let apiKey = "80c84163db9433d86bea5c88b0e43920";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);

  let apiUrl2 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl2).then(displayForecast);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  search(cityInput.value);
}

//current position

function searchLocation(position) {
  let longitude = position.coords.longitude;
  let latitude = position.coords.latitude;
  let apiKey = "80c84163db9433d86bea5c88b0e43920";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let geolocationButton = document.querySelector("#geolocation");
geolocationButton.addEventListener("click", getCurrentLocation);

//convert to farenheit

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");

  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheiTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperature.innerHTML = Math.round(fahrenheiTemperature) + "°F";
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(celsiusTemperature) + "°";
}

let celsiusTemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

search("Montreal");
