import { CurrentWeather } from "../asset/index";

import Dust from "./Dust";
import Weather from "./Weather";

function Current() {
  const Currentdata = CurrentWeather();
  console.log(Currentdata);
  return (
    <>
      <Weather Currentdata={Currentdata} />
      <Dust Currentdata={Currentdata} />
    </>
  );
}

export default Current;