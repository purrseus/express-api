const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// IMPORT ROUTES
const userRoute = require('./api/routes/user.route');
const productRoute = require('./api/routes/product.route');

const app = express();

app.use(cors());

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// SET VIEWS
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/api/users', userRoute);
app.use('/api/products', productRoute);

mongoose.connect(process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connected to DB!')
);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running...');
});