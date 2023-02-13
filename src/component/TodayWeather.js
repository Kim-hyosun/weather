import TodayWeatherData from "./TodayWeatherData";
import TodayWeatherTitle from "./TodayWeatherTitle";

function TodayWeather() {
	return (
		<div className="weather">
			<TodayWeatherTitle />
			<TodayWeatherData />
		</div>
	);
}

export default TodayWeather;