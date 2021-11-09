const express = require('express');
require('cross-fetch/polyfill');
const bodyParser = require('body-parser');
const cors = require('cors');
const routeHandler = require('./api/route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/graphql', routeHandler);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

module.exports = app;
