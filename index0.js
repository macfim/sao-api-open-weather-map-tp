const request = require("request");

const API_KEY = "";
const BASE_URL =
  "http://api.openweathermap.org/data/2.5/weather?appid=" + API_KEY + "&q=";

function getWeatherData(city, callback) {
  const url = BASE_URL + city + "&units=metric&lang=fr";
  request(url, function (error, response, body) {
    if (error) {
      callback(error, null);
    } else {
      const weatherData = JSON.parse(body);
      callback(null, weatherData);
    }
  });
}

getWeatherData("Sousse", (error, data) => {
  if (error) {
    console.error("Erreur lors de la récupération des données:", error);
  } else {
    console.log("Météo à Sousse:");
    console.log("Description:", data.weather[0].description);
    console.log("Température:", data.main.temp, "°C");
    console.log("Humidité:", data.main.humidity, "%");
  }
});
