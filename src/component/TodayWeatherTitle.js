
function TodayWeatherTitle({ Currentdata }) {
	return (
		<div className="maptitle">
			<span className="title">오늘의 날씨</span>
			<div className="titleDate">
				<span className="date"></span>
				<span className="time"></span>
			</div>
		</div>
	);
}

export default TodayWeatherTitle;