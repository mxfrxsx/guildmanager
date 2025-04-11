const express = require('express');
const app = express();
const port = 3000;  // Port für den Server

// Eine einfache Route für "Hello World"
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Server starten
app.listen(port, () => {
  console.log(`Backend läuft auf http://localhost:${port}`);
});
