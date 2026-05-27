import { Forecast, Airforecast } from "../../asset/index";
import TomorrowDust from "./TomorrowDust";
import TomorrowWeather from "./TomorrowWeather";



function Tomorrow() {
  const { data } = Forecast();
  const { data: airforecast, error } = Airforecast();
  return (
    <>
      <TomorrowWeather data={data} />
      {error ? (
        <div className="dataError">미세먼지 정보를 불러오지 못했습니다.</div>
      ) : (
        <TomorrowDust airforecast={airforecast} />
      )}
    </>
  );
}

export default Tomorrow;