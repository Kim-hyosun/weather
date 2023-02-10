
import WeatherTitle from "./WeatherTitle";
import WeatherData from "./WeatherData";

function Weather({data, Currentdata}) {
  return (
    <div className="weather">
      <WeatherTitle Currentdata={Currentdata} />
      <WeatherData Currentdata={Currentdata}/>
    </div>
  );
}

export default Weather;