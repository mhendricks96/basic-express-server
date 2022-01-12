'use strict';

const server = require('../lib/server.js');
const supertest = require('supertest');
const request = supertest(server.app);

describe('testing our person returning a name', () => {

  it('should create a new person and send back the persons name', async () => {
    const response = await request.post('/person?name=test');
    console.log(response);
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test');
  });

  it('should return a 500 status if no name is present', async () => {
    const response = await request.post('/person');
    
    expect(response.status).toEqual(500);
    expect(response.text).toEqual('Server Error');
  });

  it('should return a 404 status if route is bad', async () => {
    const response = await request.post('/people');

    expect(response.status).toEqual(404);
  });
});