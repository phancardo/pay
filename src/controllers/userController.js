const userService = require('../services/userService');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = await userService.createUser({ name, email });
    res.status(201).json({ message: 'User created', data: newUser });
  } catch (error) {
    res.status(400).json({ message: 'Error creating user', error });
  }
};
