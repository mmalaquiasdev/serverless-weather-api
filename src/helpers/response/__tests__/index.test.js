const { responseSucess, responseError } = require('../index');

const requestId = 'offline_awsRequestId_45168256350838387';

test('Should return a responseSucess obj', () => {
  const data = {
    title: 'Conditions for Sao Paulo, SP, BR at 11:00 PM BRT',
    lat: '-23.57538',
    long: '-46.615639',
    link: 'http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-455827/',
    pubDate: 'Mon, 06 Aug 2018 11:00 PM BRT',
    condition: {
      code: '26',
      date: 'Mon, 06 Aug 2018 11:00 PM BRT',
      temp: '11',
      text: 'Cloudy',
    },
  };

  const res = responseSucess(data, requestId);

  expect(res.statusCode).toBe(200);
  expect(res.body.requestId).toBe(requestId);
  expect(res.body).not.toBeUndefined;
});

test('Should return a responseError obj', () => {
  const error = {
    statusCode: 500,
    message: '500 Internal Server Error ',
  };

  const res = responseError(error, requestId);

  expect(res.statusCode).toBe(500);
  expect(res.body.requestId).toBe(requestId);
  expect(res.body).not.toBeUndefined;
});
