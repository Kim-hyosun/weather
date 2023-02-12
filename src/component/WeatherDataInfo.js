// import { useEffect, useState } from "react";
// import axios from "../../node_modules/axios/index";

// function WeatherDataInfo({ cities }) {
// 	let [temp, setTemp] = useState("");
// 	let [icon, setIcon] = useState("");
// 	let [description, setDescription] = useState("");
// 	let [err, setErr] = useState(null);
// 	useEffect(() => {
// 		axios
// 			.get(`https://api.openweathermap.org/data/2.5/weather?${cities.code}&lang=kr&appid=7d9433de9290a17c6ac5fde49cac3591&units=metric`)
// 			.then((res) => {
// 				setTemp(res.data.main.temp)
// 				setIcon(res.data.weather[0].icon)
// 				setDescription(res.data.weather[0], description)
// 			})
// 			.catch((err) => {
// 				setErr(err.message)
// 			})
// 	}, [])

// 	return (
// 		<>
// 			<img src={`http://openweathermap.org/img/wn/${icon}.png`} alt={description} />
// 			<div className="temp">{temp}℃/{description}</div>

// 		</>
// 	);
// }

// export default WeatherDataInfo;