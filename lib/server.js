'use strict';

const express = require('express');
const app = express();

const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const createPerson = require('./middleware/createPerson.js');
const err404 = require('./middleware/404.js');
const err500 = require('./middleware/500.js');

app.use(logger);
app.use(express.json());
//app.use(validator);


app.get('/', (req, res, next) => {
  res.send('this is the home route');
});


app.post('/person', validator, createPerson);

app.use(err404);
app.use(err500);

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log('listening on port ' + port);
    });
  },
  app,
};