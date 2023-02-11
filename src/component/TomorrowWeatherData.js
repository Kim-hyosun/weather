
function TomorrowWeatherData({ data }) {
	return (
		<div className="mapdata">
			{
				data.map((item, idx) => <div key={item.data.city.id} className={'wt' + idx}>
					<div className="title">{item.data.city.name}</div>
					<img src={`http://openweathermap.org/img/wn/${item.data.list[12].weather[0].icon}.png`} alt={item.data.list[12].weather.description} />
					<div className="temp">{item.data.list[12].main.temp_min}/{item.data.list[12].main.temp_max}℃ (체감{item.data.list[12].main.feels_like}℃)</div>
				</div>
				)
			}
		</div >
	);
}

export default TomorrowWeatherData;