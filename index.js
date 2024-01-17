const http = require('http');
const express = require('express')
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send("First Host")
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
