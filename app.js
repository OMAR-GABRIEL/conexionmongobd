// app.js
const express = require('express');
const showRoutes = require('./routes/show');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/shows', showRoutes);

module.exports = app;
