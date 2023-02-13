
function MoreWeatherData({ data }) {
	return (
		<div className="mapdata">
			{
				data.map((item, idx) => <div key={item.data.city.id} className={'wt' + idx}>
					<div className="title">{item.data.city.name ? item.data.city.name : "loading"}</div>
					<img src={`http://openweathermap.org/img/wn/${item.data.list[18].weather[0].icon}.png`} alt={item.data.list[18].weather.description} />
					<div className="temp">{item.data.list[18].main.temp ? item.data.list[18].main.temp : "loading"}℃</div>
					<div style={{whiteSpace:'nowrap'}}>(체감{item.data.list[18].main.feels_like}℃)</div>
				</div>
				)
			}
		</div >
	);
}

export default MoreWeatherData;