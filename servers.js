const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>Del Mundo Patrick Molinyawe</h1>
    <h2>BA 4102</h2>
    <p>"Today’s challenge is tomorrow’s skill."</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
