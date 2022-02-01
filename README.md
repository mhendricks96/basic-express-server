# basic-express-server

a business requirements standpoint, we will be building a basic Express server using best practices, including server modularization, use of middleware, and tests.

[Deployment URL- 1](Secondexpressserver-env.eba-px7q2zq9.us-west-2.elasticbeanstalk.com)

## Installation

- `git clone https://github.com/mhendricks96/basic-express-server.git`

- `cd basic-express-server`

- `nmp install`

## Usage

- start server: `npm start`

- test server: `npm test`

## Routes

- GET: `/`: home route

- Post: `/person`: creates a person, and returns an object with the person's name'

### /person

- contains string: name

- the name is sent back everytime in a response body

### UML

[uml screenshot](https://user-images.githubusercontent.com/75649765/149055252-e05e06c7-ebcb-4cb9-a24a-5cae8f3544e3.png)
