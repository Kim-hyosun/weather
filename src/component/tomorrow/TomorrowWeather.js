import TomorrowWeatherData from "./TomorrowWeatherData";
import TomorrowWeatherTitle from "./TomorrowWeatherTitle";

function TomorrowWeather({ data }) {
	return (
		<div className="weather">
			<TomorrowWeatherTitle data={data} />
			<TomorrowWeatherData data={data} />
		</div>
	);
}

export default TomorrowWeather;