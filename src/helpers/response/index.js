const sucess = require('./sucess');
const error = require('./error');
const createResponseJSON = require('./responseJson');

module.exports = ({
  responseSucess: (data, requestId, status = 200) => {
    return sucess(data, requestId, status, createResponseJSON);
  },
  responseError: (err, requestId) => error(err, requestId, createResponseJSON),
});
