const { responseSucess, responseError } = require('./src/helpers/response');
const { getWeather } = require('./src/service');

const about = (context) => {
  console.log('init about lambda');
  return responseSucess('Go Serverless v1.0! Your function executed successfully!', context.awsRequestId);
};

const weather = async (event, context) => {
  console.log('init weather lambda');
  try {
    const result = await getWeather(event.queryStringParameters.city);
    return responseSucess(result, context.awsRequestId);
  } catch (error) {
    console.error('error', error);
    return responseError(error, context.awsRequestId);
  }
};

module.exports = { about, weather };
