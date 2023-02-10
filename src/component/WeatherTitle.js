
function WeatherTitle({ currentdata }) {
  console.log(currentdata); 

  return (
    
    <div className="maptitle">
      <span className="title">현재 날씨</span>
      <div className="titleDate">
        {/* {data.map(item => <span className="date">{item.dt}</span>)} */}
     
        <span className="date"></span>
        <span className="time"></span>
      </div>
    </div>
  );
}

export default WeatherTitle;