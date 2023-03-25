 const container = document.querySelector('.container')
 const search = document.querySelector('.search-box button')
 const weatherBox = document.querySelector('.weather-box')
 const apiKey = '8fa7b79b238742e580c192119232503';
 const searchBox = document.querySelector('.search-box');
 const input = searchBox.querySelector('input');
 const button = searchBox.querySelector('button');
 
 button.addEventListener('click', () => {
   const location = input.value;
   const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;
 
   fetch(apiUrl)
     .then(response => response.json())
     .then(data => {
       // Use the data in your app
       console.log(data);
     })
     .catch(error => {
       console.error(error);
     });
 });
