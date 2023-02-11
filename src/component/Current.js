import { CurrentWeather, Air } from "../asset/index";

import Dust from "./Dust";
import Weather from "./Weather";

function Current() {
  const Currentdata = CurrentWeather();
  const currentAir = Air();

  console.log(currentAir)
  return (
    <>
      <Weather Currentdata={Currentdata} />
      <Dust />
    </>
  );
}

export default Current;