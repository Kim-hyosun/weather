import { Forecast, Air } from "../asset/index";

import TodayDust from "./TodayDust";
import TodayWeather from "./TodayWeather";

function Today() {
  const Currentdata = Forecast();
  const currentAir = Air();
  // console.log(Currentdata);
  return (
    <>
      <TodayWeather Currentdata={Currentdata} />
      <TodayDust currentAir={currentAir} />
    </>
  );
}

export default Today;