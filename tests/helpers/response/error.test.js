const responseError = require('../../../src/helpers/response/error');

test('Should create a error response with 500 status code', () => {
  const requestId = 'offline_awsRequestId_45168256350838387';
  const error = {
    message: 'test',
  };
  const resError = responseError(error, requestId);

  expect(resError.statusCode).toBe(500);
});


test('Should create a error response 400 Bad Request', () => {
  const requestId = 'offline_awsRequestId_45168256350838387';
  const error = {
    statusCode: 400,
    message: 'The request city name is invalid',
  };
  const resError = responseError(error, requestId);
  expect(resError.statusCode).toBe(400);
  expect(resError.body.error.code).toBe('custom-400');
  expect(resError.body.error.message).toBe('The request city name is invalid');
  expect(resError.body.requestId).toBe('offline_awsRequestId_45168256350838387');
});
