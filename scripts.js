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
      temperature = data.current.temp_f;
      conditionText = data.current.condition.text;
      code = data.current.condition.code;
      console.log(code);
      textWeather();
      displayWeatherPic(data);
    })
    .catch((error) => {
      console.error(error);
    });
});

function textWeather() {
  temperatureElement.textContent = `${temperature}°F`;
  descriptionElement.textContent = conditionText;
}

function displayImage(src, width, height) {
  let img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  document.body.appendChild(img);
}

function displayWeatherPic(data) {
  weatherStates.forEach((state) => {
    if (state.code === data.current.condition.code) {
      displayImage(state.image, 320, 250);
    }
  });
}
// sunny, rain, snow, clouds, haze, hail, thunder

const weatherStates = [
  {
    code: 1003,
    image: "assets/cloudy.png",
  },
  {
    code: 1006,
    image: "assets/cloudy.png",
  },
  {
    code: 1009,
    image: "assets/cloudy.png",
  },
  {
    code: 1066,
    image: "assets/snow.png",
  },
  {
    code: 1069,
    image: "assets/snow.png",
  },
  {
    code: 1072,
    image: "assets/snow.png",
  },
  {
    code: 1114,
    image: "assets/snow.png",
  },
  {
    code: 1117,
    image: "assets/snow.png",
  },
  {
    code: 1210,
    image: "assets/snow.png",
  },
  {
    code: 1213,
    image: "assets/snow.png",
  },
  {
    code: 1216,
    image: "assets/snow.png",
  },
  {
    code: 1219,
    image: "assets/snow.png",
  },
  {
    code: 1222,
    image: "assets/snow.png",
  },
  {
    code: 1225,
    image: "assets/snow.png",
  },
  {
    code: 1255,
    image: "assets/snow.png",
  },
  {
    code: 1258,
    image: "assets/snow.png",
  },
  {
    code: 1279,
    image: "assets/snow.png",
  },
  {
    code: 1282,
    image: "assets/snow.png",
  },
  {
    code: 1087,
    image: "assets/thunder.png",
  },
  {
    code: 1273,
    image: "assets/thunder.png",
  },
  {
    code: 1276,
    image: "assets/thunder.png",
  },
  {
    code: 1000,
    image: "assets/sunny.png",
  },
  {
    code: 1249,
    image: "assets/hail.png",
  },
  {
    code: 1204,
    image: "assets/hail.png",
  },
  {
    code: 1207,
    image: "assets/hail.png",
  },
  {
    code: 1237,
    image: "assets/hail.png",
  },
  {
    code: 1252,
    image: "assets/hail.png",
  },
  {
    code: 1261,
    image: "assets/hail.png",
  },
  {
    code: 1264,
    image: "assets/hail.png",
  },

  {
    code: 1030,
    image: "assets/hazy.png",
  },
  {
    code: 1135,
    image: "assets/hazy.png",
  },
  {
    code: 1147,
    image: "assets/hazy.png",
  },
  {
    code: 1063,
    image: "assets/rain.png",
  },
  {
    code: 1150,
    image: "assets/rain.png",
  },
  {
    code: 1153,
    image: "assets/rain.png",
  },
  {
    code: 1168,
    image: "assets/rain.png",
  },
  {
    code: 1171,
    image: "assets/rain.png",
  },
  {
    code: 1180,
    image: "assets/rain.png",
  },
  {
    code: 1183,
    image: "assets/rain.png",
  },
  {
    code: 1186,
    image: "assets/rain.png",
  },
  {
    code: 1189,
    image: "assets/rain.png",
  },
  {
    code: 1192,
    image: "assets/rain.png",
  },
  {
    code: 1195,
    image: "assets/rain.png",
  },
  {
    code: 1198,
    image: "assets/rain.png",
  },
  {
    code: 1201,
    image: "assets/rain.png",
  },
  {
    code: 1240,
    image: "assets/rain.png",
  },
  {
    code: 1243,
    image: "assets/rain.png",
  },
  {
    code: 1246,
    image: "assets/rain.png",
  },
  {
    code: 1249,
    image: "assets/rain.png",
  },
];