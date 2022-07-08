import ReactWeather, { useOpenWeather } from 'react-open-weather';

const WeatherPage = () => {

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '2ab6ad88f6cdc6046ce169ce50e06045',
    lat: '38.575764',
    lon: '-121.478851',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  return (
      <ReactWeather
          isLoading={isLoading}
          errorMessage={errorMessage}
          data={data}
          lang="en"
          locationLabel="Sacramento"
          unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
          showForecast
      />
  );
}

export default WeatherPage
