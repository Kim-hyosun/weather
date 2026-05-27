import { useForecast } from "../../hooks/useWeather";
import { FORECAST_INDEX } from "../../constants/forecastIndex";
import { City } from "../../types";
import Loading from "../../shared/Loading";
import ErrorMessage from "../../shared/Error";

function TomorrowWeatherDataInfo({ cities }: { cities: City }) {
	const { data, isLoading, isError } = useForecast(cities);

	if (isLoading) return <Loading />;
	if (isError || !data) return <ErrorMessage />;

	const item = data.list[FORECAST_INDEX.tomorrow];

	return (
		<>
			<img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt={item.weather[0].description} />
			<div className="temp">{item.main.temp}℃</div>
			<div className="none" style={{ whiteSpace: 'nowrap' }}>(체감{item.main.feels_like}℃)</div>
		</>
	);
}

export default TomorrowWeatherDataInfo;
