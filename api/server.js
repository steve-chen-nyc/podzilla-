'use strict';

const express = require('express');

const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
mongoose.connect('mongodb://localhost:27017/podcasts')

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

let podcast = require('./controllers/podcasts_controller');
app.use('/podcasts', podcast);

app.listen(3000);
