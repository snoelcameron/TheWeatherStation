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

//temperature

function showWeather(response) {
  let city = document.querySelector("#city");
  let date = document.querySelector("#date");
  let temperature = document.querySelector("#temperature");
  let description = document.querySelector("#description");
  let humidity = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#wind");
  let todayIcon = document.querySelector("#iconLarge");

  city.innerHTML = response.data.name;
  date.innerHTML = showDate(response.data.dt * 1000);
  temperature.innerHTML = Math.round(celsiusTemperature) + "°";
  description.innerHTML = response.data.weather[0].description;
  humidity.innerHTML = "Humidity: " + response.data.main.humidity + "%";
  windSpeed.innerHTML =
    "Wind speed: " + Math.round(response.data.wind.speed) + " km/h";
  todayIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );

  document
    .querySelector("#iconLarge")
    .setAttribute("src", getIcon(response.data.weather[0].todayIcon));
}

//switch icon
function getIcon(response) {
  let todayIcon = document.querySelector("#iconLarge");
  let iconId = response.data.weather[0].description;
  if (iconId === "01d" || iconId === "01n") {
    todayIcon.setAttribute("alt", "images/sunlarge");
  } else if (iconId === "02d" || iconId === "02n") {
    todayIcon.setAttribute("alt", "images/few_clouds_large");
  } else if (
    iconId === "03d" ||
    iconId === "03n" ||
    iconId === "04d" ||
    iconId === "04n"
  ) {
    todayIcon.setAttribute("alt", "images/cloudlarge");
  } else if (iconId === "09d" || iconId === "09n") {
    todayIcon.setAttribute("alt", "images/rainylarge");
  } else if (iconId === "10d" || iconId === "10n") {
    todayIcon.setAttribute("alt", "images/rainylarge");
  } else if (iconId === "11d" || iconId === "11n") {
    todayIcon.setAttribute("alt", "images/thunderstorm_large");
  } else if (iconId === "13d" || iconId === "13n") {
    todayIcon.setAttribute("alt", "images/snowlarge");
  } else if (iconId === "50d" || iconId === "50n") {
    todayIcon.setAttribute("alt", "images/cloudlarge");
  }
  return iconElement;
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

search("Montreal");

//current position

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "80c84163db9433d86bea5c88b0e43920";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showWeather);
}

function getPosition(event) {
  event.preventDefault();
  window.navigator.geolocation.getCurrentPosition(showPosition);
}

let geolocationButton = document.querySelector("#geolocation");
geolocationButton.addEventListener("click", getPosition);

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
