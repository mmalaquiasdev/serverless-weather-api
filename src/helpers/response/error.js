const createBodyResponse = (statusCode, requestId, message) => {
  return {
    error: {
      code: `custom-${statusCode}`,
      message,
    },
    requestId,
  };
};

const createErrorResponse = (error, requestId, createResponseJSON) => {
  console.error(error);

  const statusCode = error.statusCode || 500;
  const body = createBodyResponse(, requestId, error.message);

  return createResponseJSON(statusCode, body);
};

module.exports = createErrorResponse;
