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

//switch backgorund gradient

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
    icon === "04n" ||
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
  let precipitation = document.querySelector("#precipitation");
  let windSpeed = document.querySelector("#wind");
  let iconElement = document.querySelector("#iconLarge");
  celsiusTemperature = response.data.main.temp;

  city.innerHTML = response.data.name;
  date.innerHTML = showDate(response.data.dt * 1000);
  temperature.innerHTML = Math.round(celsiusTemperature) + "°";
  description.innerHTML = response.data.weather[0].description;

  if (response.data.rain !== undefined) {
    document.querySelector("#precipitation").innerHTML =
      response.data.rain["1h"] + "mm/h";
  } else {
    document.querySelector("#precipitation").innerHTML = "no rain";
    document
      .querySelector("#iconLarge")
      .setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      );
  }
  windSpeed.innerHTML =
    "Wind speed: " + Math.round(response.data.wind.speed) + " km/h";
  humidity.innerHTML = "Humidity " + response.data.main.humidity + "%";

  iconElement.setAttribute(
    "src",
    changeWeatherIcon(response.data.weather[0].icon)
  );

  document.getElementById(
    "backgroundGradient"
  ).style.backgroundImage = changeBackground(response.data.weather[0].icon);
}

//forecast date+time

function showDay(timestamp) {
  let time = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[time.getDay()];
  return `${day}`;
}

function displayForecast(response) {
  let forecastContainer = document.querySelector("#forecast");
  forecastContainer.innerHTML = null;
  for (let index = 0; index < 5; index++) {
    let threeHourForecast = response.data.list[index * 8];
    let temp = threeHourForecast.main.temp;
    let iconCode = threeHourForecast.weather[0].icon;
    let localImagePath = getForecastIcon(iconCode);
    forecastContainer.innerHTML += getForecastCardHTML(
      temp,
      threeHourForecast.dt,
      localImagePath
    );
  }
}

function getForecastCardHTML(temp, time, imagePath) {
  return `
     <div class="col-1 card">
  <div class="card-text">
    <p class="card-temp">${Math.round(temp)}°</p>
    <p class="card-day" #cardWeekday>${showDay(time)}</p>
     <img src="${imagePath}" id="cardIcon" width="115px"/>
  </div>
</div>
  `;
}

//switch forecast icon
function getForecastIcon(icon) {
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
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

search("Montreal");
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
  document.querySelector("#celsiusLink").classList.remove("active");
  document.querySelector("#fahrenheitLink").classList.add("active");
  document.querySelector("#temperature").innerHTML =
    Math.round((celsiusTemperature * 9) / 5 + 32) + "°F";

  convertDailyForecast("fahrenheit");

  document
    .querySelector("#celsiusLink")
    .addEventListener("click", displayCelsiusTemperature);
  document
    .querySelector("#fahrenheitLink")
    .removeEventListener("click", displayFahrenheitTemperature);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  document.querySelector("#celsiusLink").classList.add("active");
  document.querySelector("#fahrenheitLink").classList.remove("active");
  document.querySelector("#temperature").innerHTML =
    Math.round(celsiusTemperature) + "°";

  convertDailyForecast("celsiusTemperature");

  document
    .querySelector("#celsiusLink")
    .removeEventListener("click", displayCelsiusTemperature);
  document
    .querySelector("#fahrenheitLink")
    .addEventListener("click", displayFahrenheitTemperature);
}

//convert FORECAST to farenheit
function convertDailyForecast(unit) {
  if (unit === "celsiusTemperature") {
    document.querySelectorAll(".card-temp").forEach(function (temperature) {
      let currentTemperature = temperature.innerHTML.replace("°", "");
      temperature.innerHTML = `${Math.round(
        ((currentTemperature - 32) * 5) / 9
      )}°`;
    });
  } else {
    document.querySelectorAll(".card-temp").forEach(function (temperature) {
      let currentTemperature = temperature.innerHTML.replace("°", "");
      temperature.innerHTML = `${Math.round(
        (currentTemperature * 9) / 5 + 32
      )}°`;
    });
  }
}

let celsiusTemperature = null;

document
  .querySelector("#fahrenheitLink")
  .addEventListener("click", displayFahrenheitTemperature);

document
  .querySelector("#celsiusLink")
  .addEventListener("click", displayCelsiusTemperature);
