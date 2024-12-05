const mongoose = require('mongoose');

// Définition du schéma pour le produit
const produitSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
    trim: true, // Supprime les espaces inutiles
  },
  description: {
    type: String,
    required: false,
    trim: true,
  },
  prix: {
    type: Number,
    required: true,
    min: 0, // Le prix ne peut pas être négatif
  },
  quantiteEnStock: {
    type: Number,
    required: true,
    min: 0, // La quantité en stock ne peut pas être négative
    default: 0,
  },
  categorie: {
    type: String,
    required: true,
    enum: ['Electronique', 'Maison', 'Vêtements', 'Alimentation', 'Autre'], // Restreint les catégories possibles
  },
  imageUrl: {
    type: String,
    required: false,
    match: [
      /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/,
      'Veuillez fournir une URL valide pour l’image.',
    ],
  },
  dateAjout: {
    type: Date,
    default: Date.now, // Date actuelle par défaut
  },
  estDisponible: {
    type: Boolean,
    default: true, // Indique si le produit est en vente
  },
});

// Création du modèle Produit
const Produit = mongoose.model('Produit', produitSchema);

module.exports = Produit;
