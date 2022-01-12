'use strict';

class Person {
  constructor(name) {
    this.name = name;
  }
}

function createPerson(req, res) {
  //console.log('hi')
  //console.log(req.body.name);
  let name = req.query.name;
  let person = new Person(name);

  res.send(person);
}

module.exports = createPerson;