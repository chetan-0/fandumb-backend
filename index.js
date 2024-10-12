
const express = require('express');
const app = express();
const port = 8080;
app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fandumnDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
