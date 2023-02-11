import { Forecast } from "../asset/index";

import MoreDust from "./MoreDust";
import MoreWeather from "./MoreWeather";

function More() {
  const data = Forecast();
  console.log(data)
  return (
    <>
      <MoreWeather data={data} />
      <MoreDust data={data} />
    </>
  );
}

export default More;