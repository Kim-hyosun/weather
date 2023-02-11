import { CurrentWeather } from "../asset/index";

import TodayDust from "./TodayDust";
import TodayWeather from "./TodayWeather";

function Today() {
  const Currentdata = CurrentWeather();
  // console.log(Currentdata);
  return (
    <>
      <TodayWeather Currentdata={Currentdata} />
      <TodayDust Currentdata={Currentdata} />
    </>
  );
}

export default Today;