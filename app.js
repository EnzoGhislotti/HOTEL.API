const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const hospedeRoutes = require('./routes/hospede');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/hospede', hospedeRoutes);

module.exports = app;
