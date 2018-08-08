/* eslint-disable */

const mockAxios = require('axios');
const getWeather = require('../index');

test('Should get the weather and return a new rest obj', async () => {
  const result = await getWeather(mockAxios, 'São Paulo');
  expect(result).not.toBeUndefined;
  expect(result.title).not.toBeNull;
  expect(result.temperature).not.toBeUndefined;
  expect(result.temperature.code).not.toBeNaN;
});
