const http = require('http');
const express = require('express')
const app = express();
require('dotenv').config()
const PORT = process.env.PORT;
const connectToDB = require('./db')
const bookRoute = require('./routes/booksroutes')

// Connecting to db
connectToDB()

app.use(express.json())

app.use('/books', bookRoute)

app.get('/', (req, res) => {
  res.send("First Host")
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
