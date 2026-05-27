import { Forecast,AirforecastMore } from "../../asset/index";

import MoreDust from "./MoreDust";
import MoreWeather from "./MoreWeather";

function More() {
  const { data } = Forecast();
  const { data: dustdata, error } = AirforecastMore();
  return (
    <>
      <MoreWeather data={data} />
      {error ? (
        <div className="dataError">미세먼지 정보를 불러오지 못했습니다.</div>
      ) : (
        <MoreDust dustdata={dustdata} />
      )}
    </>
  );
}

export default More;