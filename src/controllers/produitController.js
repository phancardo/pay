const ProduitService = require('../services/produitService');

// Ajouter un nouveau produit
async function creerProduit(req, res) {
  try {
    const produit = await ProduitService.ajouterProduit(req.body);
    res.status(201).json(produit);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

// Obtenir tous les produits
async function listeProduits(req, res) {
  try {
    const produits = await ProduitService.obtenirTousLesProduits(req.query);
    res.status(200).json(produits);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

// Obtenir un produit par ID
async function obtenirProduit(req, res) {
  try {
    const produit = await ProduitService.obtenirProduitParId(req.params.id);
    res.status(200).json(produit);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

// Mettre à jour un produit
async function mettreAJourProduit(req, res) {
  try {
    const produit = await ProduitService.mettreAJourProduit(req.params.id, req.body);
    res.status(200).json(produit);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

// Supprimer un produit
async function supprimerProduit(req, res) {
  try {
    const produit = await ProduitService.supprimerProduit(req.params.id);
    res.status(200).json({ message: "Produit supprimé avec succès.", produit });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

module.exports = {
  creerProduit,
  listeProduits,
  obtenirProduit,
  mettreAJourProduit,
  supprimerProduit,
};
