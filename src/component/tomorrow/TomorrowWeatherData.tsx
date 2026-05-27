import TomorrowWeatherDataInfo from "./TomorrowWeatherDataInfo";
import { CITIES } from "../../constants/regions";

function TomorrowWeatherData() {
  return (
    <div className="mapdata">
      {CITIES.map((city, idx) => (
        <div key={city.id} className={'wt' + idx}>
          <div className="title">{city.name}</div>
          <TomorrowWeatherDataInfo cities={city} />
        </div>
      ))}
    </div>
  );
}

export default TomorrowWeatherData;
