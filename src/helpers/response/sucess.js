const createResponseJSON = require('./responseJson');

const createBodyResponse = (statusCode, data, requestId) => ({
  data,
  requestId,
});

const createSuccessResponse = (data, requestId, status) => {
  const body = createBodyResponse(status, data, requestId);
  return createResponseJSON(status, body);
};

module.exports = createSuccessResponse;
