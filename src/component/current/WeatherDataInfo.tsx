import { useCurrentWeather } from "../../hooks/useWeather";
import { City } from "../../types";
import Loading from "../../shared/Loading";
import ErrorMessage from "../../shared/Error";

function WeatherDataInfo({ cities }: { cities: City }) {
	const { data, isLoading, isError } = useCurrentWeather(cities);

	if (isLoading) return <Loading />;
	if (isError || !data) return <ErrorMessage />;

	return (
		<>
			<img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt={data.weather[0].description} />
			<div className="temp">{data.main.temp}℃</div>
			<div className="none">{data.weather[0].description}</div>
		</>
	);
}

export default WeatherDataInfo;
