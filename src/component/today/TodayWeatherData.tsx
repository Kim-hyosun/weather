import TodayWeatherDataInfo from "./TodayWeatherDataInfo";
import { CITIES } from "../../constants/regions";

function TodayWeatherData() {
  return (
    <div className="mapdata">
      {CITIES.map((city, idx) => (
        <div key={city.id} className={'wt' + idx}>
          <div className="title">{city.name}</div>
          <TodayWeatherDataInfo cities={city} />
        </div>
      ))}
    </div>
  );
}

export default TodayWeatherData;
