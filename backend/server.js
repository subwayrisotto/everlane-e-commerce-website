require('dotenv').config(); // load .env

const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 4000; // fallback if .env is missing

app.use(cors());
app.use(express.json());

const products = require('./data/products.json');
const stores = require('./data/stores.json');

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/stores', (req, res) => {
  res.json(stores);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});