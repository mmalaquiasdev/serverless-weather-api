const { responseSucess, responseError } = require('./src/helpers/response');
const { getWeather } = require('./src/service');

module.exports.about = (event, context, callback) => {
  console.log('init about lambda');
  const sucess = responseSucess('Go Serverless v1.0! Your function executed successfully!', context.awsRequestId);

  callback(null, sucess);
};

module.exports.weather = async (event, context) => {
  console.log('init weather lambda');
  try {
    const result = await getWeather(event.queryStringParameters.city);
    return responseSucess(result, context.awsRequestId);
  } catch (error) {
    console.error('error', error);
    return responseError(error, context.awsRequestId);
  }
};
