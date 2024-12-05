const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config/env');

exports.authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // Ajoute les informations utilisateur au `req`
    next(); // Passe au middleware suivant
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
