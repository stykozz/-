const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Връзка с базата данни (използва името на услугата от compose като хост)
const dbHost = process.env.DB_HOST || 'localhost';
mongoose.connect(`mongodb://${dbHost}:27017/barberShop`)
  .then(() => console.log('Успешно свързване с MongoDB контейнера!'))
  .catch(err => console.error('Грешка при връзка с MongoDB:', err));

// Сервиране на статичните ти файлове (твоя HTML и стилове)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Уеб сървърът на BarberCraft работи на http://localhost:${PORT}`);
});