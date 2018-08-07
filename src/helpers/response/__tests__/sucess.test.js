const createSuccessResponse = require('../sucess');

const requestId = 'offline_awsRequestId_45168256350838387';
const statusCodeOK = 200;

test('Should create a sucess response with 200 OK status code', () => {
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
    forecast: [
      {
        code: '11',
        date: '06 Aug 2018',
        day: 'Mon',
        high: '15',
        low: '11',
        text: 'Showers',
      },
      {
        code: '26',
        date: '07 Aug 2018',
        day: 'Tue',
        high: '18',
        low: '10',
        text: 'Cloudy',
      },
      {
        code: '28',
        date: '08 Aug 2018',
        day: 'Wed',
        high: '23',
        low: '13',
        text: 'Mostly Cloudy',
      },
      {
        code: '4',
        date: '09 Aug 2018',
        day: 'Thu',
        high: '23',
        low: '15',
        text: 'Thunderstorms',
      },
      {
        code: '34',
        date: '10 Aug 2018',
        day: 'Fri',
        high: '16',
        low: '8',
        text: 'Mostly Sunny',
      },
      {
        code: '32',
        date: '11 Aug 2018',
        day: 'Sat',
        high: '17',
        low: '7',
        text: 'Sunny',
      },
      {
        code: '34',
        date: '12 Aug 2018',
        day: 'Sun',
        high: '17',
        low: '6',
        text: 'Mostly Sunny',
      },
      {
        code: '30',
        date: '13 Aug 2018',
        day: 'Mon',
        high: '20',
        low: '10',
        text: 'Partly Cloudy',
      },
      {
        code: '34',
        date: '14 Aug 2018',
        day: 'Tue',
        high: '22',
        low: '12',
        text: 'Mostly Sunny',
      },
      {
        code: '30',
        date: '15 Aug 2018',
        day: 'Wed',
        high: '26',
        low: '11',
        text: 'Partly Cloudy',
      },
    ],
    description: '<![CDATA[<img src="http://l.yimg.com/a/i/us/we/52/26.gif"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Cloudy\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Mon - Showers. High: 15Low: 11\n<BR /> Tue - Cloudy. High: 18Low: 10\n<BR /> Wed - Mostly Cloudy. High: 23Low: 13\n<BR /> Thu - Thunderstorms. High: 23Low: 15\n<BR /> Fri - Mostly Sunny. High: 16Low: 8\n<BR />\n<BR />\n<a href="http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-455827/">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n<BR />\n]]>',
    guid: {
      isPermaLink: 'false',
    },
  };

  const result = createSuccessResponse(data, requestId, statusCodeOK);
  expect(result.statusCode).toBe(statusCodeOK);
  expect(result.body.requestId).toBe(requestId);
  expect(result.body).not.toBeUndefined;
});
