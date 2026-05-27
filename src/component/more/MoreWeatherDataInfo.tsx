import { useEffect, useState } from "react";
import axios from "axios";
import { City } from "../../types";


function MoreWeatherDataInfo({ cities }: { cities: City }) {
  let [temp, setTemp] = useState("");
	let [icon, setIcon] = useState("");
	let [feel, setFeel] = useState("");
	let [des, setDes] = useState("");
  let [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    
    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast?${cities.code}&lang=kr&appid=${process.env.REACT_APP_OW_API_KEY}&units=metric`)
      .then((res) => {
        setTemp(res.data.list[18].main.temp);
        setIcon(res.data.list[18].weather[0].icon);
        setFeel(res.data.list[18].main.feels_like);
        setDes(res.data.list[18].weather.description);
      })
      .catch((err) => {
        setErr(err instanceof Error ? err.message : String(err));
      })
  }, [cities]);

  return (
    <>
     {err ? (
				<div>Error: {err}</div>
			) : (
				<>
				<img src={`http://openweathermap.org/img/wn/${icon ? icon: "loading"}.png`} alt={des} />
					<div className="temp">{temp ? temp : "loading"}℃</div>
					<div className="none" style={{whiteSpace:'nowrap'}}>(체감{feel ? feel : "loading"}℃)</div>
					</>
			)}
    </>
  );
}

export default MoreWeatherDataInfo;