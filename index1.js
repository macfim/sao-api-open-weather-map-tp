const API_KEY = "";
const BASE_URL =
  "http://api.openweathermap.org/data/2.5/weather?appid=" + API_KEY + "&q=";

async function getWeatherData(city) {
  try {
    const url = BASE_URL + city + "&units=metric&lang=fr";
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    throw error;
  }
}

async function main() {
  try {
    const data = await getWeatherData("Sousse");
    console.log("Météo à Sousse:");
    console.log("Description:", data.weather[0].description);
    console.log("Température:", data.main.temp, "°C");
    console.log("Humidité:", data.main.humidity, "%");
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
  }
}

main();
