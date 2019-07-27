const express = require('express');
const path = require('path');
const parser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors')

const router = require('./routes');

const app = express();
const port = process.env.PORT || 3002;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/', cors(), router);

//todo create rest of crud methods

app.listen(port, () => console.log(`Listening to port ${port}`))