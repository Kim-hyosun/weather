// import WeatherDataInfo from "./WeatherDataInfo";


function WeatherData({ Currentdata }) {
  return (
    <div className="mapdata">
      {
        Currentdata.map((item, idx) => <div key={item.data.id} className={'wt' + idx}>
          <div className="title">{item.data.name ? item.data.name : "loading"}</div>
          <img src={`http://openweathermap.org/img/wn/${item.data.weather[0].icon}.png`} alt={item.data.weather.main} />
          <div>{item.data.main.temp ? item.data.main.temp : "loading"}℃</div>
          <div>{item.data.weather[0].description ? item.data.weather[0].description : "loading"}</div>
        </div>
        )
      }
    </div >
  );
}
/* function WeatherData() {

  const cities = [
    { id: 1, name: `서해5도`, code: `id=1843163`, },
    { id: 2, name: `서울`, code: `id=1835848`, },
    { id: 3, name: `강원영서`, code: `id=1844045`, },
    { id: 4, name: `강원영동`, code: `id=1843137`, },
    { id: 5, name: `울릉독도`, code: `lat=37.512899&lon=130.826678`, },
    { id: 6, name: `충청남도`, code: `id=1835895`, },
    { id: 7, name: `충청북도`, code: `id=1845604`, },
    { id: 8, name: `경상북도`, code: `id=1839071`, },
    { id: 9, name: `전라북도`, code: `id=1845457`, },
    { id: 10, name: `경상남도`, code: `id=1838519`, },
    { id: 11, name: `전라남도`, code: `id=1841811`, },
    { id: 12, name: `제주`, code: `id=1846266`, },
  ]

  return (
    <div className="mapdata">
      {
        cities.map((item, idx) => <div key={item.id} className={'wt' + idx}>
          <div className="title">{item.name}</div>
          <WeatherDataInfo key={item.id} cities={cities} />
        </div>
        )
      }


    </div >
  );
} */

export default WeatherData;