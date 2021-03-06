const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const booksRoute = require('./routes/books');

const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/books', booksRoute);

// connect to mongodb atlas
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connected to mongodb atlas');
  })
  .catch((error) => {
    console.log('Error in app', error);
  });

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
