import { Forecast, Airforecast } from "../../asset/index";
import TomorrowDust from "./TomorrowDust";
import TomorrowWeather from "./TomorrowWeather";



function Tomorrow() {
  const data = Forecast();
  const airforecast = Airforecast();
  // console.log(airforecast)
  return (
    <>
      <TomorrowWeather data={data} />
      <TomorrowDust airforecast={airforecast} />
    </>
  );
}

export default Tomorrow;