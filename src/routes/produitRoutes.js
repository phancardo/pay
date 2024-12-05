const express = require('express');
const router = express.Router();
const ProduitController = require('../controllers/produitController');

// Route pour ajouter un produit
router.post('/produits', ProduitController.creerProduit);
router.get('/produits', ProduitController.listeProduits);

module.exports = router;
