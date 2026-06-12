const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();

// Segurança: headers HTTP
app.use(helmet());

// CORS
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
}));

// Parse JSON
app.use(express.json());

// Rota raiz
app.get('/', (req, res) => {
  res.json({ message: 'API Financeira com IA - Backend funcionando!' });
});

module.exports = app;