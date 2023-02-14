import { useEffect, useState } from "react";
import axios from "../../../node_modules/axios/index";


function WeatherDataInfo({ cities }) {
	let [temp, setTemp] = useState("");
	let [icon, setIcon] = useState("");
	let [description, setDescription] = useState("");
	let [err, setErr] = useState(null);

	useEffect(() => {
		axios
			.get(`https://api.openweathermap.org/data/2.5/weather?${cities.code}&lang=kr&appid=038d154e9b9e548e27fb2ea1e227aded&units=metric`)
			.then((res) => {
				setTemp(res.data.main.temp)
				setIcon(res.data.weather[0].icon)
				setDescription(res.data.weather[0].description)
			})
			.catch((err) => {
				setErr(err.message)
			})
	}, [cities])

	return (
		<>
			{err ? (
				<div>Error: {err}</div>
			) : (
				<>
			<img src={`http://openweathermap.org/img/wn/${icon}.png`} alt={description} />
			<div className="temp">{temp}℃</div>
			<div className="none">{description}</div>
				</>
			)}
		</>
	);
}

export default WeatherDataInfo;