const { responseSucess } = require('./src/helpers/response');

module.exports.about = (event, context, callback) => {
  console.log('init about lambda');
  const sucess = responseSucess('Go Serverless v1.0! Your function executed successfully!', context.awsRequestId);

  callback(null, sucess);
};
