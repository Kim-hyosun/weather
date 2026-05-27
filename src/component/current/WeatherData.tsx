import WeatherDataInfo from "./WeatherDataInfo";
import { CITIES } from "../../constants/regions";

function WeatherData() {
  return (
    <div className="mapdata">
      {CITIES.map((city, idx) => (
        <div key={city.id} className={'wt' + idx}>
          <div className="title">{city.name}</div>
          <WeatherDataInfo cities={city} />
        </div>
      ))}
    </div>
  );
}

export default WeatherData;
