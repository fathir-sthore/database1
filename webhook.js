// file: webhook.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware untuk parsing body JSON
app.use(express.json());

app.post('/webhook/mylinkid', (req, res) => {
  const data = req.body;

  // Log data masuk
  console.log('Webhook diterima:', data);

  // Contoh respon untuk validasi
  res.status(200).json({ message: 'Webhook diterima' });

  // Kamu bisa simpan data ke database, kirim ke Telegram, dll di sini
});

app.listen(port, () => {
  console.log(`Webhook aktif di http://localhost:${port}/webhook/mylinkid`);
});