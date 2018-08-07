const createBodyResponse = (statusCode, data, requestId) => ({
  data,
  requestId,
});

const createSuccessResponse = (data, requestId, status, createResponseJSON) => {
  const body = createBodyResponse(status, data, requestId);
  return createResponseJSON(status, body);
};

module.exports = createSuccessResponse;
