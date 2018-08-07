const createWeatherReqBody = param => ({
  method: 'get',
  url: 'https://query.yahooapis.com/v1/public/yql',
  params: {
    format: 'json',
    q: `select item from weather.forecast where woeid in
        (select woeid from geo.places(1) where text="${param}") and u='c'`,
  },
});

const createWeatherResBody = result => ({
  title: result.data.query.results.channel.item.title,
  latitude: result.data.query.results.channel.item.lat,
  longitude: result.data.query.results.channel.item.long,
  lastUpdate: result.data.query.results.channel.item.pubDate,
  temperature: {
    code: result.data.query.results.channel.item.condition.temp,
    text: result.data.query.results.channel.item.condition.text,
    units: 'celsius',
  },
});

const getWeather = async (axios, param) => {
  const result = await axios(createWeatherReqBody(param));
  return createWeatherResBody(result);
};

module.exports = getWeather;
