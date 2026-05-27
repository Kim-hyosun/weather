import { Air } from "../../asset/index";

import TodayDust from "./TodayDust";
import TodayWeather from "./TodayWeather";

function Today() {
  const { data: currentAir, error } = Air();
  return (
    <>
      <TodayWeather />
      {error ? (
        <div className="dataError">미세먼지 정보를 불러오지 못했습니다.</div>
      ) : (
        <TodayDust currentAir={currentAir} />
      )}
    </>
  );
}

export default Today;