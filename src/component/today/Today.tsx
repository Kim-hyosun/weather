import TodayDust from "./TodayDust";
import TodayWeather from "./TodayWeather";
import { useCurrentAqi } from "../../hooks/useAqi";
import Loading from "../../shared/Loading";
import ErrorMessage from "../../shared/Error";

function Today() {
  const { data: currentAir, isLoading, isError } = useCurrentAqi();
  return (
    <>
      <TodayWeather />
      {isLoading ? <Loading /> : isError ? <ErrorMessage /> : <TodayDust currentAir={currentAir} />}
    </>
  );
}

export default Today;
