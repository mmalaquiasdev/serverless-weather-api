const axios = require('axios');

const getWeather = require('./yahoo.weather.api');

module.exports = ({
  getWeather: param => getWeather(axios, param),
});
