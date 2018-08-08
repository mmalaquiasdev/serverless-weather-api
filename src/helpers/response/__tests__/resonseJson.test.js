/* eslint-disable */

const createResponseJSON = require('../responseJson');

test('Shloud create a json object with statusCode, header values and a body with some data', () => {
  const body = {
    data: 'test',
  };
  const response = createResponseJSON(200, body);
  expect(response).not.toBeUndefined;
  expect(response.statusCode).toBe(200);
  expect(response.body.data).toBe('test');
});
