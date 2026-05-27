
import { ForecastData } from "../../types";

function TomorrowWeatherTitle({ data }: { data?: ForecastData }) {
	return (
		<div className="maptitle">
			<span className="title">내일의 날씨예보</span>
			<div className="titleDate">
				<span className="date"></span>
				<span className="time"></span>
			</div>
		</div>
	);
}

export default TomorrowWeatherTitle;