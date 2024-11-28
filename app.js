const express = require('express');
const morgan = require('morgan');

const app = express();

// Middlewares globaux
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static('public'));

// Routes
const indexRoutes = require('./src/routes/index');
app.use('/api', indexRoutes);

// Middleware pour gérer les 404
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

module.exports = app;
