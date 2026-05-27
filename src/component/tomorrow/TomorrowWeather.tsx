import TomorrowWeatherData from "./TomorrowWeatherData";
import TomorrowWeatherTitle from "./TomorrowWeatherTitle";

function TomorrowWeather() {
	return (
		<div className="weather">
			<TomorrowWeatherTitle />
			<TomorrowWeatherData />
		</div>
	);
}

export default TomorrowWeather;
