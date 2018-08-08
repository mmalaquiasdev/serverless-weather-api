module.exports.get = jest.fn(() => Promise.resolve({
  data: {
    query:
    {
      count: 1,
      created: '2018-08-08T14:25:34Z',
      lang: 'en-US',
      results: {
        channel: {
          item:
        {
          title: 'Conditions for Sao Paulo, SP, BR at 10:00 AM BRT',
          lat: '-23.57538',
          long: '-46.615639',
          link: 'http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-455827/',
          pubDate: 'Wed, 08 Aug 2018 10:00 AM BRT',
          condition: {
            code: '30',
            date: 'Wed, 08 Aug 2018 10:00 AM BRT',
            temp: '16',
            text: 'Partly Cloudy',
          },
          forecast: [Array],
          description: '<![CDATA[<img src="http://l.yimg.com/a/i/us/we/52/30.gif"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Partly Cloudy\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Wed - Scattered Thunderstorms. High: 23Low: 12\n<BR /> Thu - Thunderstorms. High: 23Low: 15\n<BR /> Fri - Sunny. High: 18Low: 8\n<BR /> Sat - Sunny. High: 18Low: 7\n<BR /> Sun - Mostly Sunny. High: 17Low: 6\n<BR />\n<BR />\n<a href="http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-455827/">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n<BR />\n]]>',
          guid: [Object],
        },
        },
      },
    },
  },
}));
