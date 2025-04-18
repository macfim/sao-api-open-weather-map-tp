const axios = require("axios");

const BASE_URL = "https://randomuser.me/api";

async function testRandomUserAPI() {
  try {
    const response = await axios.get(BASE_URL);
    const user = response.data.results[0];

    console.log("\nRéponse API réussie !");
    console.log("Détails de l'utilisateur :");
    console.log(`Nom : ${user.name.first} ${user.name.last}`);
    console.log(`Email : ${user.email}`);
    console.log(`Pays : ${user.location.country}`);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données de l'API RandomUser :",
      error.message
    );
  }
}

testRandomUserAPI();
