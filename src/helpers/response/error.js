const createResponseJSON = require('./responseJson');

const createBodyResponse = (statusCode, requestId, message) => ({
  error: {
    code: `custom-${statusCode}`,
    message,
  },
  requestId,
});

const createErrorResponse = (error, requestId) => {
  console.error(error);

  const statusCode = error.statusCode || 500;
  const body = createBodyResponse(statusCode, requestId, error.message);

  return createResponseJSON(statusCode, body);
};

module.exports = createErrorResponse;
