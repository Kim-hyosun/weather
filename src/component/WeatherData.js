

function WeatherData({ Currentdata }) {


  return (
    <div className="mapdata">
      {
        Currentdata.map((item, idx) => <div key={item.data.id} className={'wt' + idx}>
          <div className="title">{item.data.name}</div>
          <img src={`http://openweathermap.org/img/wn/${item.data.weather[0].icon}.png`} alt={item.data.weather.main} />
          <div className="temp">{item.data.main.temp}℃/{item.data.weather[0].description}</div>
        </div>
        )
      }


    </div >
  );
}

export default WeatherData;