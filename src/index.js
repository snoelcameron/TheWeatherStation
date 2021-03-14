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
  let iconLarge = document.querySelector("#iconLarge");

  celsiusTemperature = response.data.main.temp;

  city.innerHTML = response.data.name;
  date.innerHTML = showDate(response.data.dt * 1000);
  temperature.innerHTML = Math.round(celsiusTemperature) + "°";
  description.innerHTML = response.data.weather[0].description;
  humidity.innerHTML = "Humidity: " + response.data.main.humidity + "%";
  windSpeed.innerHTML =
    "Wind speed: " + Math.round(response.data.wind.speed) + " km/h";
  iconLarge.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconLarge.setAttribute("alt", response.data.weather[0].description);
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

//switch background gradient

function change() {
  let background = "#backgroundGradient";
  let colour1 = document.getElementsByTagName("01d.png")[0].value;
  let colour2 = document.getElementsByTagName("02d.png ")[1].value;
  let colour3 = document.getElementsByTagName("03d.png")[2].value;
  let colour4 = document.getElementsByTagName("09d.png")[3].value;
  let colour5 = document.getElementsByTagName("11d.png")[4].value;
  let colour6 = document.getElementsByTagName("13d.png")[5].value;
  let colour7 = document.getElementsByTagName("50d.png")[6].value;

  let answers = [colour1, colour2, colour3, colour4, colour5, colour6, colour7];

  switch (answers) {
    case answers[0]:
      background = gradient("#ffc10d, #fe9f00");
      break;
    case answers[1]:
      background = gradient("#ffc10d, #fe9f00");
      break;
    case answers[2]:
      background = gradient("#3e7dba, #2d52a7");
      break;
    case answers[3]:
      background = gradient("#a4abbe, #4f5077");
      break;
    case answers[4]:
      background = gradient("#a4abbe, #4f5077");
      break;
    case answers[5]:
      background = gradient("#83bcc8, #628a9d");
      break;
    case answers[6]:
      background = gradient("#3e7dba, #2d52a7");
      break;

    default:
      background = gradient("#ffc10d, #fe9f00");
  }

  document.getElementById("outputBackground").innerHTML = image;
}
