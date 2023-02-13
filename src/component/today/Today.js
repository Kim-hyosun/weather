import { Air } from "../../asset/index";

import TodayDust from "./TodayDust";
import TodayWeather from "./TodayWeather";

function Today() {
  const currentAir = Air();
  // console.log(Currentdata);
  return (
    <>
      <TodayWeather />
      <TodayDust currentAir={currentAir} />
    </>
  );
}

export default Today;