import MoreWeatherDataInfo from "./MoreWeatherDataInfo";
import { CITIES } from "../../constants/regions";

function MoreWeatherData() {
  return (
    <div className="mapdata">
      {CITIES.map((city, idx) => (
        <div key={city.id} className={'wt' + idx}>
          <div className="title">{city.name}</div>
          <MoreWeatherDataInfo cities={city} />
        </div>
      ))}
    </div>
  );
}

export default MoreWeatherData;
