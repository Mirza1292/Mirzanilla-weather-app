
function displayWeatherCondition(response) {
  let temperatureElement = document.querySelector("#tempindicator");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#tempdescription");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind"); 
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  }

  let apiKey = "b975277a9f39c6c3209fa308608465fc";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);


