import TodayWeatherData from "./TodayWeatherData";
import TodayWeatherTitle from "./TodayWeatherTitle";

function TodayWeather({ Currentdata }) {
	return (
		<div className="weather">
			<TodayWeatherTitle Currentdata={Currentdata} />
			<TodayWeatherData Currentdata={Currentdata} />
		</div>
	);
}

export default TodayWeather;