
import WeatherTitle from "./WeatherTitle";
import WeatherData from "./WeatherData";

function Weather({data}) {
  return (
    <div className="weather">
      <WeatherTitle data={data} />
      <WeatherData />
    </div>
  );
}

export default Weather;