const mongoose = require('mongoose');
require('dotenv').config(); // Charger les variables d'environnement depuis .env

const DB_URI = process.env.DB_URI; // Assurez-vous d'avoir défini DB_URI dans votre fichier .env

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI); // Pas besoin d'options supplémentaires
    console.log('Connecté à MongoDB');
  } catch (err) {
    console.error('Erreur de connexion à MongoDB :', err.message);
    process.exit(1); // Quitte l'application si la connexion échoue
  }
};

module.exports = connectDB;
