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
    "Sunday",
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
    iconElement = "images/sunlarge.png";
  } else if (icon === "02n" || icon === "02d") {
    iconElement = "images/few_clouds_large.png";
  } else if (
    icon === "03d" ||
    icon === "03n" ||
    icon === "04d" ||
    icon === "04n" ||
    icon === "50d" ||
    icon === "50n"
  ) {
    iconElement = "images/cloudlarge.png";
  } else if (
    icon === "10n" ||
    icon === "10d" ||
    icon === "9n" ||
    icon === "9d"
  ) {
    iconElement = "images/rainylarge.png";
  } else if (icon === "11d" || icon === "11n") {
    iconElement = "images/thunderstorm_large.png";
  } else if (icon === "13d" || icon === "13n") {
    iconElement = "images/snowlarge.png";
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
  } else if (icon === "01n" || icon === "02n") {
    backgroundGradient = "linear-gradient(#ffc10d, #fe9f00)";
  } else if (
    icon === "03d" ||
    icon === "03n" ||
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
    changeWeatherIcon(response.data.weather[0].todayIcon)
  );

  iconElement.setAttribute(
    "src",
    changeForecastIcon(response.data.weather[0].todayIcon)
  );

  document.getElementById(
    "backgroundGradient"
  ).style.backgroundImage = changeBackground(
    response.data.current.weather[0].icon
  );
}

//forecast

function dispalyForecast(response) {
  let forecastPreview = document.querySelector("#forecast");
  forecastPreview.innerHTML = null;
  let forecast = null;

  for (let index = 0; index < 5; index++) {
    forecast = response.data.list[index];
    forecastPreview.innerHTML += `
     <div class="col-1 card" style="width: 115px">
  <div class="card-text">
    <p class="card-temp">${Math.round(forecast.main.temp_max)}°</p>
    <p class="card-day">sun</p>
    <img
      class="card-img-top"
      src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"
      alt="small sun icon"
    />
  </div>
</div>
  `;
  }
}

//forecast icon switch
function changeForecastIcon(icon) {
  let iconElement = "";
  if (icon === "01d" || icon === "01n") {
    iconElement = "images/sunsmall.png";
  } else if (icon === "02n" || icon === "02d") {
    iconElement = "images/few_clouds_small.png";
  } else if (
    icon === "03d" ||
    icon === "03n" ||
    icon === "04d" ||
    icon === "04n" ||
    icon === "50d" ||
    icon === "50n"
  ) {
    iconElement = "images/cloudsmall.png";
  } else if (
    icon === "10n" ||
    icon === "10d" ||
    icon === "9n" ||
    icon === "9d"
  ) {
    iconElement = "images/rainysmall.png";
  } else if (icon === "11d" || icon === "11n") {
    iconElement = "images/thunderstorm_small.png";
  } else if (icon === "13d" || icon === "13n") {
    iconElement = "images/snowsmall.png";
  }
  return iconElement;
}

//search city

function search(city) {
  let apiKey = "80c84163db9433d86bea5c88b0e43920";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(dispalyForecast);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  search(cityInput.value);
}

//current position

function searchLocation(position) {
  let apiKey = "80c84163db9433d86bea5c88b0e43920";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeather);
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
