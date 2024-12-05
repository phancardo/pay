const mongoose = require('mongoose');

// Définition du schéma pour l'utilisateur
const utilisateurSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
    trim: true, // Supprime les espaces inutiles au début et à la fin
  },
  email: {
    type: String,
    required: true,
    unique: true, // Garantit l'unicité de l'email
    lowercase: true, // Convertit l'email en minuscules
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Veuillez entrer une adresse email valide.',
    ],
  },
  motDePasse: {
    type: String,
    required: true,
    minlength: 6, // Mot de passe doit contenir au moins 6 caractères
  },
  dateNaissance: {
    type: Date,
    required: false,
  },
  role: {
    type: String,
    enum: ['utilisateur', 'administrateur'], // Restreint les valeurs possibles
    default: 'utilisateur',
  },
  dateCreation: {
    type: Date,
    default: Date.now, // Définit la date actuelle par défaut
  },
});

// Création du modèle Utilisateur
const Utilisateur = mongoose.model('Utilisateur', utilisateurSchema);

module.exports = Utilisateur;
