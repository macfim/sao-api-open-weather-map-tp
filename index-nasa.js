const axios = require("axios");

const API_KEY = "DEMO_KEY";
const BASE_URL = "https://api.nasa.gov";

async function testNasaAPI() {
  try {
    const response = await axios.get(`${BASE_URL}/planetary/apod`, {
      params: {
        api_key: API_KEY,
      },
    });

    console.log("\nRéponse API réussie !");
    console.log("Détails de l'APOD :");
    console.log(`Titre : ${response.data.title}`);
    console.log(`Date : ${response.data.date}`);
    console.log(`URL de l'image : ${response.data.url}`);
    console.log(`Copyright : ${response.data.copyright || "Domaine public"}`);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données de l'API NASA :",
      error.message
    );
  }
}

testNasaAPI();
