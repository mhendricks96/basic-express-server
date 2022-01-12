'use strict';

function validator(req, res, next){
  //console.log(req.query);
  let name = req.query.name;

  if (!name){
    next('500');
  } else {
    next();
  }
}

module.exports = validator;