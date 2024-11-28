const User = require('../models/userModel');

exports.getAllUsers = async () => {
  return await User.findAll(); // Retourne tous les utilisateurs
};

exports.createUser = async (userData) => {
  const { name, email } = userData;

  // Vérifie si l'utilisateur existe déjà
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    throw new Error('User with this email already exists');
  }

  // Crée un nouvel utilisateur
  return await User.create({ name, email });
};
