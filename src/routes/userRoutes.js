const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware.authenticate, userController.getAllUsers); // Authentification requise
router.post('/', userController.createUser);

module.exports = router;
