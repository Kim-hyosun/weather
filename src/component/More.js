import { Forecast,AirforecastMore } from "../asset/index";

import MoreDust from "./MoreDust";
import MoreWeather from "./MoreWeather";

function More() {
  const data = Forecast();
  const dustdata = AirforecastMore();
  return (
    <>
      <MoreWeather data={data} />
      <MoreDust dustdata={dustdata} />
    </>
  );
}

export default More;