const createWeatherReqBody = param => ({
  params: {
    format: 'json',
    q: `select item from weather.forecast where woeid in
        (select woeid from geo.places(1) where text="${param}") and u='c'`,
  },
});
const createWeatherObj = channel => ({
  title: channel.item.title,
  latitude: channel.item.lat,
  longitude: channel.item.long,
  lastUpdate: channel.item.pubDate,
  temperature: {
    code: channel.item.condition.temp,
    text: channel.item.condition.text,
    units: 'celsius',
  },
});

const createWeatherResBody = (data) => {
  const { channel } = data.query.results;
  return createWeatherObj(channel);
};

const getWeather = async (axios, param) => {
  const result = await axios.get('https://query.yahooapis.com/v1/public/yql', createWeatherReqBody(param));
  return createWeatherResBody(result.data);
};

module.exports = getWeather;
