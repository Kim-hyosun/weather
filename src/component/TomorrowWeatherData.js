
function TomorrowWeatherData({ data }) {
	return (
		<div className="mapdata">
			{
				data.map((item, idx) => <div key={item.data.city.id} className={'wt' + idx}>
					<div className="title">{item.data.city.name ? item.data.city.name : "loading"}</div>
					<img src={`http://openweathermap.org/img/wn/${item.data.list[12].weather[0].icon}.png`} alt={item.data.list[12].weather.description} />
					<div className="temp">{item.data.list[12].main.temp ? item.data.list[12].main.temp : "loading"}℃<br /> (체감{item.data.list[12].main.feels_like ? item.data.list[12].main.feels_like : "loading"}℃)</div>
				</div>
				)
			}
		</div >
	);
}

export default TomorrowWeatherData;