const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Bienvenue dans votre projet Node.js avec Express !' });
});

module.exports = router;
