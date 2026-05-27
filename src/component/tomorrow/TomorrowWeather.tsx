import { ForecastData } from "../../types";
import TomorrowWeatherData from "./TomorrowWeatherData";
import TomorrowWeatherTitle from "./TomorrowWeatherTitle";

function TomorrowWeather({ data }: { data?: ForecastData }) {
	return (
		<div className="weather">
			<TomorrowWeatherTitle data={data} />
			<TomorrowWeatherData />
		</div>
	);
}

export default TomorrowWeather;