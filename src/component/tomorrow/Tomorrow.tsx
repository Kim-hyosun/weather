import TomorrowDust from "./TomorrowDust";
import TomorrowWeather from "./TomorrowWeather";
import { useForecastAqi } from "../../hooks/useAqi";
import { AQI_FORECAST_INDEX } from "../../constants/forecastIndex";
import Loading from "../../shared/Loading";
import ErrorMessage from "../../shared/Error";

function Tomorrow() {
  const { data: airforecast, isLoading, isError } = useForecastAqi(AQI_FORECAST_INDEX.tomorrow);
  return (
    <>
      <TomorrowWeather />
      {isLoading ? <Loading /> : isError ? <ErrorMessage /> : <TomorrowDust airforecast={airforecast} />}
    </>
  );
}

export default Tomorrow;
