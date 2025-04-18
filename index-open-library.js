const axios = require("axios");

const BASE_URL = "https://openlibrary.org";

async function testOpenLibraryAPI() {
  try {
    const title = "The Lord of the Rings";
    const response = await axios.get(`${BASE_URL}/search.json`, {
      params: {
        title: title,
        limit: 1, // Limit results to 1 book
      },
    });

    console.log("\nRéponse API réussie !");

    if (response.data.docs && response.data.docs.length > 0) {
      const book = response.data.docs[0];
      console.log("Détails du livre :");
      console.log(`Titre : ${book.title}`);
      console.log(
        `Auteur(s) : ${
          book.author_name ? book.author_name.join(", ") : "Inconnu"
        }`
      );
      console.log(
        `Première publication : ${book.first_publish_year || "Inconnue"}`
      );
    } else {
      console.log("Aucun livre trouvé avec ce titre.");
    }
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données de l'API Open Library :",
      error.message
    );
  }
}

testOpenLibraryAPI();
