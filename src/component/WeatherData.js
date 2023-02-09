const weatherData = [
  {id:1, class:'wt1', title:'서해5도' },
  {id:2, class:'wt2', title:'서울·경기' },
  {id:3, class:'wt3', title:'강원영서' },
  {id:4, class:'wt4', title:'강원영동' },
  {id:5, class:'wt5', title:'울릉·독도' },
  {id:6, class:'wt6', title:'충청남도' },
  {id:7, class:'wt7', title:'충청북도' },
  {id:8, class:'wt8', title:'경상북도' },
  {id:9, class:'wt9', title:'전라북도' },
  {id:10, class:'wt10', title:'전라남도' },
  {id:11, class:'wt11', title:'경상남도' },
  {id:12, class:'wt12', title:'제주도' },
]


function WeatherData() {
  return (
    <div className="mapdata">
      {  
        weatherData.map((item)=><div key={item.id} className={item.class}>
                                 <div>{item.title}</div>
                                 <img src="#" alt="맑음" />        
                                 <div>온도</div>
                                </div>
          )
      }
    </div>
  );
}

export default WeatherData;