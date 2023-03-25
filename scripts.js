const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const apiKey = "8fa7b79b238742e580c192119232503";
const searchBox = document.querySelector(".search-box");
const input = searchBox.querySelector("input");
const button = searchBox.querySelector("button");
const temperatureElement = document.querySelector(".temperature");
const descriptionElement = document.querySelector(".description");

button.addEventListener("click", () => {
  const location = input.value;
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

  fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    temperature = data.current.temp_f;
    conditionText = data.current.condition.text;
    textWeather();
    displayWeatherPic();
  })
  .catch((error) => {
    console.error(error);
  })


function textWeather() {
  temperatureElement.textContent = `${temperature}°F`;
  descriptionElement.textContent = conditionText;
}

function displayWeatherPic() {
  if (conditionText === 'Clear') {
    displayImage('assets/sunny.png', 320, 250)
  }
}})

function displayImage(src, width, height) {
    let img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    document.body.appendChild(img);
   }

   // sunny, rain, snow, clouds, haze, hail, thunder