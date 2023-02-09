
function WeatherTitle({ data }) {
  const { dt } = data;
  console.log(data);
  console.log(data[0]);
  

  return (
    
    <div className="maptitle">
      <span className="title">현재 날씨</span>
      <div className="titleDate">
        <span className="date"></span>
        <span className="time"></span>
      </div>
    </div>
  );
}

export default WeatherTitle;