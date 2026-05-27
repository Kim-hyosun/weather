import { useEffect, useState } from "react";
import axios from "axios";
import { City } from "../../types";


function WeatherDataInfo({ cities }: { cities: City }) {
	let [temp, setTemp] = useState("");
	let [icon, setIcon] = useState("");
	let [description, setDescription] = useState("");
	let [err, setErr] = useState<string | null>(null);

	useEffect(() => {
		axios
			.get(`https://api.openweathermap.org/data/2.5/weather?${cities.code}&lang=kr&appid=${process.env.REACT_APP_OW_API_KEY}&units=metric`)
			.then((res) => {
				setTemp(res.data.main.temp)
				setIcon(res.data.weather[0].icon)
				setDescription(res.data.weather[0].description)
			})
			.catch((err) => {
				setErr(err instanceof Error ? err.message : String(err))
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