import { useEffect, useState } from "react";
import axios from "../../../node_modules/axios/index";

function TodayWeatherDataInfo({ cities }) {
	let [tempMin, setTempMin] = useState("");
	let [tempMax, setTempMax] = useState("");
	let [icon, setIcon] = useState("");
	let [feel, setFeel] = useState("");
	let [des, setDes] = useState("");
	let [err, setErr] = useState(null);

  useEffect(() => {
    
		axios
			.get(`https://api.openweathermap.org/data/2.5/forecast?${cities.code}&lang=kr&appid=038d154e9b9e548e27fb2ea1e227aded&units=metric`)
			.then((res) => {
        setTempMin(res.data.list[0].main.temp_min);
        setIcon(res.data.list[0].weather[0].icon);
        setTempMax(res.data.list[0].main.temp_max);
        setFeel(res.data.list[0].main.feels_like);
        setDes(res.data.list[0].weather.description);
			})
			.catch((err) => {
        setErr(err.message);
			})
	}, [cities])

	return (
		<>
			{err ? (
				<div>Error: {err}</div>
			) : (
				<>
				<img src={`http://openweathermap.org/img/wn/${icon ? icon: "loading"}.png`} alt={des} />
					<div className="temp">{tempMin ? tempMin : "loading"}/{tempMax ? tempMax : "loading"}℃</div>
					<div style={{whiteSpace:'nowrap'}}>(체감{feel ? feel : "loading"}℃)</div>
					</>
			)}
		</>
	);
}

export default TodayWeatherDataInfo;