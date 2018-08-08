[![Build Status](https://travis-ci.org/mmalaquiasdev/serverless-weather-api.svg?branch=master)](https://travis-ci.org/mmalaquiasdev/serverless-weather-api)

# Serverless Weather API

This is a basic project for demonstrating a fictitious serverless RESTful API.

## Getting Started

### How to Run

```sh
$ npm install  # install dependencies
$ npm install -g serverless
# after
$ sls offline # Run localhost
# or
$ sls deploy # Deploy at AWS (need aws credentials)
```
> Open browser to http://localhost:3000/weather?city=Salvador

### Running the tests

```sh
$ npm test
$ npm run test:coverage
$ npm run test:memory
```

### Coding style tests

```
$ npm run lint
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

This is inspired by [ifood-backend-basic-test](https://github.com/ifood/ifood-backend-basic-test)
