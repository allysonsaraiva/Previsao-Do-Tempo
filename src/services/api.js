/* eslint-disable no-template-curly-in-string */
const KEY = 'dbab17b4bdac4c09a2d32448220706';

const fetchData = async (city) => {
  const URL = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

  const fetchResponse = await fetch(URL);
  const data = await fetchResponse.json();

  return data;
};

export default fetchData;
