const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// connect to mongodb atlas

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connected to mongodb atlas');
  });

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
