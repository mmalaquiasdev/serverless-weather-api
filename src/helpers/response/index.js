const sucess = require('./sucess');
const error = require('./error');

module.exports = ({
  responseSucess: (data, requestId, status = 200) => sucess(data, requestId, status),
  responseError: (err, requestId) => error(err, requestId),
});
