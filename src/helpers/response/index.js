const sucess = require('./sucess');
const error = require('./error');
const createResponseJSON = require('./responseJson');

const responseFactory = () => ({
  sucess: (data, requestId, status = 200) => sucess(data, requestId, status, createResponseJSON),
  error: (err, requestId) => error(err, requestId, createResponseJSON),
});

module.exports = responseFactory;
