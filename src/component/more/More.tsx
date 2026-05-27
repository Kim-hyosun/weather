import MoreDust from "./MoreDust";
import MoreWeather from "./MoreWeather";
import { useForecastAqi } from "../../hooks/useAqi";
import { AQI_FORECAST_INDEX } from "../../constants/forecastIndex";
import Loading from "../../shared/Loading";
import ErrorMessage from "../../shared/Error";

function More() {
  const { data: dustdata, isLoading, isError } = useForecastAqi(AQI_FORECAST_INDEX.more);
  return (
    <>
      <MoreWeather />
      {isLoading ? <Loading /> : isError ? <ErrorMessage /> : <MoreDust dustdata={dustdata} />}
    </>
  );
}

export default More;
