// ENV
require('dotenv').config();
// DEPENDENCIES
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4500;

// Static File Service
app.use(express.static('public'));
// Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTERS
app.use('/', require('./routes/meet'));

app.listen(port, () => console.log(`Server listening on port ${port}`));
