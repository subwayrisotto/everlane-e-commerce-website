require('dotenv').config(); // load .env

const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 4000; // fallback if .env is missing

app.use(cors());
app.use(express.json());

const products = require('./data/products.json');

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});