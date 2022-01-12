'use strict';

function serverError(err, req, res, next) {
  console.error('Some sort of server error');
  console.log(err);
  res.status(500).send('Server Error');
}

module.exports = serverError;