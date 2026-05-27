import { ForecastData } from "../../types";
import MoreWeatherData from "./MoreWeatherData";
import MoreWeatherTitle from "./MoreWeatherTitle";

function MoreWeather({ data }: { data?: ForecastData }) {
	return (
		<div className="weather">
			<MoreWeatherTitle data={data} />
			<MoreWeatherData data={data} />
		</div>
	);
}

export default MoreWeather;