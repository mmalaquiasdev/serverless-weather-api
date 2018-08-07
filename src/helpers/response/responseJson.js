const createResponseJSON = (statusCode, body) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body,
});

module.exports = createResponseJSON;
