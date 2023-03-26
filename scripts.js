const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherExtra = document.querySelector(".weather-extra");
const weatherImage = document.querySelector("#weather-image");
const apiKey = "8fa7b79b238742e580c192119232503";
const searchBox = document.querySelector(".search-box");
const input = searchBox.querySelector("input");
const button = searchBox.querySelector("button");
const temperatureElement = document.querySelector(".temperature");
const descriptionElement = document.querySelector(".description");
const suggestionElement = document.querySelector(".suggestion")
const feelsLikeElement = document.querySelector(".feels-like")
const humidityElement = document.querySelector(".humidity")
const windElement = document.querySelector(".wind")
const locationName = document.querySelector(".location-name")
const locationRegion = document.querySelector(".location-region")

button.addEventListener("click", () => {
  getWeatherData();
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    getWeatherData();
  }
});

input.addEventListener("click", () => {
    input.value = "";
  });

function clearWeatherImage() {
  const image = weatherBox.querySelector("img");
  if (image) {
    weatherBox.removeChild(image);
  }
}

function getWeatherData() {
  clearWeatherImage();
  const locationValue = input.value;
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationValue}&aqi=yes`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const location = data.location.name
      const region = data.location.region
      const temperature = data.current.temp_f;
      const conditionText = data.current.condition.text;
      const feelsLike = data.current.feelslike_f
      const humidity = data.current.humidity
      const wind = data.current.wind_mph
      textWeather(location, region, temperature, conditionText, feelsLike, humidity, wind);
      displayWeatherPic(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

function textWeather(location, region, temperature, conditionText, feelsLike, humidity, wind) {
    locationName.textContent = location;
    locationRegion.textContent = region;
    temperatureElement.textContent = `${Math.round(temperature)}°F`;
    descriptionElement.textContent = conditionText;
    feelsLikeElement.textContent = ` Feels like ${Math.round(feelsLike)}°F`;
    humidityElement.textContent = ` The humidity is ${Math.round(humidity)} percent`
    windElement.textContent = ` Wind speed is ${Math.round(wind)} MPH`
    
    if (temperature >= 80 && temperature <= 100) {
      suggestionElement.textContent = " Light, loose-fitting clothing made from breathable fabrics like cotton or linen. A sun hat and sunglasses can also be helpful.";
    } else if (temperature >= 70 && temperature <= 79) {
      suggestionElement.textContent = " Shorts or skirts with a light shirt, or pants with a t-shirt or light sweater. A light jacket or cardigan may be needed in the evenings.";
    } else if (temperature >= 60 && temperature <= 69) {
      suggestionElement.textContent = " Long pants or jeans with a long-sleeved shirt, sweater, or light jacket. Closed-toe shoes may also be necessary.";
    } else if (temperature >= 50 && temperature <= 59) {
      suggestionElement.textContent = " Layered clothing, such as a light sweater under a heavier jacket or coat, with long pants or jeans and closed-toe shoes or boots.";
    } else if (temperature < 50) {
      suggestionElement.textContent = " Heavy jackets or coats, scarves, hats, gloves, and warm, waterproof boots or shoes. Layers are still important, so consider wearing a warm sweater or thermal underwear under your outerwear.";
    } 

    const feelsLikeIcon = document.createElement("i");
    feelsLikeIcon.classList.add("fas", "fa-temperature-low");
    feelsLikeElement.insertBefore(feelsLikeIcon, feelsLikeElement.firstChild);
  
    const humidityIcon = document.createElement("i");
    humidityIcon.classList.add("fas", "fa-tint");
    humidityElement.insertBefore(humidityIcon, humidityElement.firstChild);
  
    const windIcon = document.createElement("i");
    windIcon.classList.add("fas", "fa-wind");
    windElement.insertBefore(windIcon, windElement.firstChild);
  
    const suggestionIcon = document.createElement("i");
    suggestionIcon.classList.add("fas", "fa-lightbulb");
    suggestionElement.insertBefore(suggestionIcon, suggestionElement.firstChild);
  
  }
  


function displayImage(src, width, height) {
  let img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  weatherBox.appendChild(img);
}

function displayWeatherPic(data) {
  weatherStates.forEach((state) => {
    if (state.code === data.current.condition.code) {
      displayImage(state.image, 150, 100);
    }
  });
}



const weatherStates = [
  {
    code: 1003,
    image: "assets/images/cloudy.png",
  },
  {
    code: 1006,
    image: "assets/images/cloudy.png",
  },
  {
    code: 1009,
    image: "assets/images/cloudy.png",
  },
  {
    code: 1066,
    image: "assets/images/snow.png",
  },
  {
    code: 1069,
    image: "assets/images/snow.png",
  },
  {
    code: 1072,
    image: "assets/images/snow.png",
  },
  {
    code: 1114,
    image: "assets/images/snow.png",
  },
  {
    code: 1117,
    image: "assets/images/snow.png",
  },
  {
    code: 1210,
    image: "assets/images/snow.png",
  },
  {
    code: 1213,
    image: "assets/images/snow.png",
  },
  {
    code: 1216,
    image: "assets/images/snow.png",
  },
  {
    code: 1219,
    image: "assets/images/snow.png",
  },
  {
    code: 1222,
    image: "assets/images/snow.png",
  },
  {
    code: 1225,
    image: "assets/images/snow.png",
  },
  {
    code: 1255,
    image: "assets/images/snow.png",
  },
  {
    code: 1258,
    image: "assets/images/snow.png",
  },
  {
    code: 1279,
    image: "assets/images/snow.png",
  },
  {
    code: 1282,
    image: "assets/images/snow.png",
  },
  {
    code: 1087,
    image: "assets/images/thunder.png",
  },
  {
    code: 1273,
    image: "assets/images/thunder.png",
  },
  {
    code: 1276,
    image: "assets/images/thunder.png",
  },
  {
    code: 1000,
    image: "assets/images/sunny.png",
  },
  {
    code: 1249,
    image: "assets/images/hail.png",
  },
  {
    code: 1204,
    image: "assets/images/hail.png",
  },
  {
    code: 1207,
    image: "assets/images/hail.png",
  },
  {
    code: 1237,
    image: "assets/images/hail.png",
  },
  {
    code: 1252,
    image: "assets/images/hail.png",
  },
  {
    code: 1261,
    image: "assets/images/hail.png",
  },
  {
    code: 1264,
    image: "assets/images/hail.png",
  },

  {
    code: 1030,
    image: "assets/images/hazy.png",
  },
  {
    code: 1135,
    image: "assets/images/hazy.png",
  },
  {
    code: 1147,
    image: "assets/images/hazy.png",
  },
  {
    code: 1063,
    image: "assets/images/rain.png",
  },
  {
    code: 1150,
    image: "assets/images/rain.png",
  },
  {
    code: 1153,
    image: "assets/images/rain.png",
  },
  {
    code: 1168,
    image: "assets/images/rain.png",
  },
  {
    code: 1171,
    image: "assets/images/rain.png",
  },
  {
    code: 1180,
    image: "assets/images/rain.png",
  },
  {
    code: 1183,
    image: "assets/images/rain.png",
  },
  {
    code: 1186,
    image: "assets/images/rain.png",
  },
  {
    code: 1189,
    image: "assets/images/rain.png",
  },
  {
    code: 1192,
    image: "assets/images/rain.png",
  },
  {
    code: 1195,
    image: "assets/images/rain.png",
  },
  {
    code: 1198,
    image: "assets/images/rain.png",
  },
  {
    code: 1201,
    image: "assets/images/rain.png",
  },
  {
    code: 1240,
    image: "assets/images/rain.png",
  },
  {
    code: 1243,
    image: "assets/images/rain.png",
  },
  {
    code: 1246,
    image: "assets/images/rain.png",
  },
  {
    code: 1249,
    image: "assets/images/rain.png",
  },
];