
function MoreWeatherTitle({ data }) {
	return (
		<div className="maptitle">
			<span className="title">모레의 날씨예보</span>
			<div className="titleDate">
				<span className="date"></span>
				<span className="time"></span>
			</div>
		</div>
	);
}

export default MoreWeatherTitle;