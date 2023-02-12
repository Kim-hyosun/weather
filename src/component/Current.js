import { CurrentWeather, Air } from "../asset/index";

import Dust from "./Dust";
import Weather from "./Weather";

function Current() {
  const Currentdata = CurrentWeather();
  const currentAir = Air();
  return (
    <>
      <Weather Currentdata={Currentdata} />
      <Dust currentAir={currentAir} />
    </>
  );
}

export default Current;