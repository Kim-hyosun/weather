
function TodayWeatherData({ Currentdata }) {
	return (
		<div className="mapdata">
			{
				Currentdata.map((item, idx) => <div key={item.data.city.id} className={'wt' + idx}>
					<div className="title">{item.data.city.name ? item.data.city.name : "loading"}</div>
					<img src={`http://openweathermap.org/img/wn/${item.data.list[0].weather[0].icon}.png`} alt={item.data.list[0].weather.description} />
					<div className="temp">{item.data.list[0].main.temp_min ? item.data.list[0].main.temp_min : "loading"}/{item.data.list[0].main.temp_max ? item.data.list[0].main.temp_max : "loading"}℃</div>
					<div>(체감{item.data.list[0].main.feels_like ? item.data.list[0].main.feels_like : "loading"}℃)</div>
				</div>
				)
			}
		</div >
	);
}

export default TodayWeatherData;