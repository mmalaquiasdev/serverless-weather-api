const createBodyResponse = (data, requestId) => ({
  data,
  requestId,
});

const createSuccessResponse = (data, requestId, status, createResponseJSON) => {
  const body = createBodyResponse(data, requestId);

  return createResponseJSON(status, body);
};

module.exports = createSuccessResponse;
