/* eslint-disable */

const service = require('../index');

test('Should return a service obj contain the getWeather function', async () => {
  const res = await service.getWeather('São Paulo');
  expect(res).toEqual(
    {
      lastUpdate: 'Wed, 08 Aug 2018 10:00 AM BRT',
      latitude: '-23.57538',
      longitude: '-46.615639',
      temperature: {
        code: '16',
        text: 'Partly Cloudy',
        units: 'celsius',
      },
      title: 'Conditions for Sao Paulo, SP, BR at 10:00 AM BRT',
    },
  );
});
