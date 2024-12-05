const Produit = require('../models/produitModel'); // Chemin vers le modèle Produit

const ProduitService = {
  /**
   * Ajouter un nouveau produit
   * @param {Object} produitData - Les données du produit
   * @returns {Object} - Produit ajouté
   */
  async ajouterProduit(produitData) {
    try {
      const produit = new Produit(produitData);
      return await produit.save();
    } catch (err) {
      throw new Error(`Erreur lors de l'ajout du produit : ${err.message}`);
    }
  },

  /**
   * Récupérer tous les produits
   * @param {Object} filtre - Filtrer les produits (optionnel)
   * @returns {Array} - Liste des produits
   */
  async obtenirTousLesProduits(filtre = {}) {
    try {
      return await Produit.find(filtre).exec();
    } catch (err) {
      throw new Error(`Erreur lors de la récupération des produits : ${err.message}`);
    }
  },

  /**
   * Récupérer un produit par ID
   * @param {String} id - L'ID du produit
   * @returns {Object} - Produit correspondant
   */
  async obtenirProduitParId(id) {
    try {
      const produit = await Produit.findById(id).exec();
      if (!produit) {
        throw new Error("Produit introuvable.");
      }
      return produit;
    } catch (err) {
      throw new Error(`Erreur lors de la récupération du produit : ${err.message}`);
    }
  },

  /**
   * Mettre à jour un produit par ID
   * @param {String} id - L'ID du produit
   * @param {Object} nouvellesDonnees - Les nouvelles données du produit
   * @returns {Object} - Produit mis à jour
   */
  async mettreAJourProduit(id, nouvellesDonnees) {
    try {
      const produit = await Produit.findByIdAndUpdate(id, nouvellesDonnees, { new: true }).exec();
      if (!produit) {
        throw new Error("Produit introuvable.");
      }
      return produit;
    } catch (err) {
      throw new Error(`Erreur lors de la mise à jour du produit : ${err.message}`);
    }
  },

  /**
   * Supprimer un produit par ID
   * @param {String} id - L'ID du produit
   * @returns {Object} - Produit supprimé
   */
  async supprimerProduit(id) {
    try {
      const produit = await Produit.findByIdAndDelete(id).exec();
      if (!produit) {
        throw new Error("Produit introuvable.");
      }
      return produit;
    } catch (err) {
      throw new Error(`Erreur lors de la suppression du produit : ${err.message}`);
    }
  },
};

module.exports = ProduitService;
