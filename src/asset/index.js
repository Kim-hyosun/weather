import axios from 'axios';
import { useEffect, useState } from 'react';


export const Forecast = () => { //  날씨 예보 
  const [data, setData] = useState([]);

  useEffect(() => {

    const Link1 = `https://api.openweathermap.org/data/2.5/forecast?id=1843163&lang=kr&appid=7d9433de9290a17c6ac5fde49cac3591&units=metric`; // 서해5도

    const Link2 = `https://api.openweathermap.org/data/2.5/forecast?id=1835848&lang=kr&appid=7d9433de9290a17c6ac5fde49cac3591&units=metric`; //서울

    const Link3 = `https://api.openweathermap.org/data/2.5/forecast?id=1844045&lang=kr&appid=7d9433de9290a17c6ac5fde49cac3591&units=metric`; //강원영서

    const Link4 = `https://api.openweathermap.org/data/2.5/forecast?id=1843137&lang=kr&appid=7d9433de9290a17c6ac5fde49cac3591&units=metric`; //강원영동

    const Link5 = `https://api.openweathermap.org/data/2.5/forecast?lat=37.512899&lon=130.826678&lang=kr&appid=7d9433de9290a17c6ac5fde49cac3591&units=metric`; //울릉독도

    const Link6 = `https://api.openweathermap.org/data/2.5/forecast?id=1835895&lang=kr&appid=7d9433de9290a17c6ac5fde49cac3591&units=metric`; //충청남도

    const Link7 = `https://api.openweathermap.org/data/2.5/forecast?id=1845604&lang=kr&appid=7d9433de9290a17c6ac5fde49cac3591&units=metric`; //충청북도

    const Link8 = `https://api.openweathermap.org/data/2.5/forecast?id=1839071&lang=kr&appid=7d9433de9290a17c6ac5fde49cac3591&units=metric`; //경상북도

    const Link9 = `https://api.openweathermap.org/data/2.5/forecast?id=1845457&lang=kr&appid=7d9433de9290a17c6ac5fde49cac3591&units=metric`;  //전라북도

    const Link10 = `https://api.openweathermap.org/data/2.5/forecast?id=1838519&lang=kr&appid=7d9433de9290a17c6ac5fde49cac3591&units=metric`; //경상남도

    const Link11 = `https://api.openweathermap.org/data/2.5/forecast?id=1841811&lang=kr&appid=7d9433de9290a17c6ac5fde49cac3591&units=metric`; //전라남도

    const Link12 = `https://api.openweathermap.org/data/2.5/forecast?id=1846266&lang=kr&appid=7d9433de9290a17c6ac5fde49cac3591&units=metric`; //제주

    Promise
      .all(
        [axios.get(Link1), axios.get(Link2), axios.get(Link3), axios.get(Link4), axios.get(Link5), axios.get(Link6), axios.get(Link7), axios.get(Link8), axios.get(Link9), axios.get(Link10), axios.get(Link11), axios.get(Link12)])
      .then((values) => {
        setData(values)
        console.log(values)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);
  return data;
}



export const CurrentWeather = () => {  //현재 날씨
  const [currentdata, setCurrentdata] = useState([]);

  useEffect(() => {

    const URL1 = `https://api.openweathermap.org/data/2.5/weather?id=1843163&lang=kr&appid=7d9433de9290a17c6ac5fde49cac3591&units=metric`; // 서해5도

    const URL2 = `https://api.openweathermap.org/data/2.5/weather?id=1835848&lang=kr&appid=7d9433de9290a17c6ac5fde49cac3591&units=metric`; //서울

    const URL3 = `https://api.openweathermap.org/data/2.5/weather?id=1844045&lang=kr&appid=7d9433de9290a17c6ac5fde49cac3591&units=metric`; //강원영서

    const URL4 = `https://api.openweathermap.org/data/2.5/weather?id=1843137&lang=kr&appid=7d9433de9290a17c6ac5fde49cac3591&units=metric`; //강원영동

    const URL5 = `https://api.openweathermap.org/data/2.5/weather?lat=37.512899&lon=130.826678&lang=kr&appid=7d9433de9290a17c6ac5fde49cac3591&units=metric`; //울릉독도

    const URL6 = `https://api.openweathermap.org/data/2.5/weather?id=1835895&lang=kr&appid=7d9433de9290a17c6ac5fde49cac3591&units=metric`; //충청남도

    const URL7 = `https://api.openweathermap.org/data/2.5/weather?id=1845604&lang=kr&appid=7d9433de9290a17c6ac5fde49cac3591&units=metric`; //충청북도

    const URL8 = `https://api.openweathermap.org/data/2.5/weather?id=1839071&lang=kr&appid=7d9433de9290a17c6ac5fde49cac3591&units=metric`; //경상북도

    const URL9 = `https://api.openweathermap.org/data/2.5/weather?id=1845457&lang=kr&appid=7d9433de9290a17c6ac5fde49cac3591&units=metric`;  //전라북도

    const URL10 = `https://api.openweathermap.org/data/2.5/weather?id=1838519&lang=kr&appid=7d9433de9290a17c6ac5fde49cac3591&units=metric`; //경상남도

    const URL11 = `https://api.openweathermap.org/data/2.5/weather?id=1841811&lang=kr&appid=7d9433de9290a17c6ac5fde49cac3591&units=metric`; //전라남도

    const URL12 = `https://api.openweathermap.org/data/2.5/weather?id=1846266&lang=kr&appid=7d9433de9290a17c6ac5fde49cac3591&units=metric`; //제주


    Promise
      .all(
        [axios.get(URL1), axios.get(URL2), axios.get(URL3), axios.get(URL4), axios.get(URL5), axios.get(URL6), axios.get(URL7), axios.get(URL8), axios.get(URL9), axios.get(URL10), axios.get(URL11), axios.get(URL12)]
      ).then((values) => {
        setCurrentdata(values);
      }
      ).catch(err => {
        console.log(err)
      })
  }, [])


  return currentdata;
}

export const Air = () => {  //현재 미세먼지
  const [air, setAir] = useState([]);

  useEffect(() => {

    const currentAir1 = `http://api.openweathermap.org/data/2.5/air_pollution?lat=37.71417&lon=26.45250&appid=7d9433de9290a17c6ac5fde49cac3591`;// 서해5도

    const currentAir2 = `http://api.openweathermap.org/data/2.5/air_pollution?lat=37.56667&lon=126.97806&appid=7d9433de9290a17c6ac5fde49cac3591`; //서울

    const currentAir3 = `http://api.openweathermap.org/data/2.5/air_pollution?lat=37.34167&lon=127.92083&appid=7d9433de9290a17c6ac5fde49cac3591`;//강원영서

    const currentAir4 = `http://api.openweathermap.org/data/2.5/air_pollution?lat=37.75000&lon=128.88333&appid=7d9433de9290a17c6ac5fde49cac3591`;//강원영동

    const currentAir5 = `http://api.openweathermap.org/data/2.5/air_pollution?lat=37.512899&lon=130.826678&appid=7d9433de9290a17c6ac5fde49cac3591`;//울릉독도

    const currentAir6 = `http://api.openweathermap.org/data/2.5/air_pollution?lat=36.78500&lon=126.45056&appid=7d9433de9290a17c6ac5fde49cac3591`; //충청남도

    const currentAir7 = `http://api.openweathermap.org/data/2.5/air_pollution?lat=36.99278&lon=127.92611&appid=7d9433de9290a17c6ac5fde49cac3591`; //충청북도

    const currentAir8 = `http://api.openweathermap.org/data/2.5/air_pollution?lat=36.01944&lon=129.34167&appid=7d9433de9290a17c6ac5fde49cac3591`;//경상북도

    const currentAir9 = `http://api.openweathermap.org/data/2.5/air_pollution?lat=35.82500&lon=127.15000&appid=7d9433de9290a17c6ac5fde49cac3591`;//전라북도

    const currentAir10 = `http://api.openweathermap.org/data/2.5/air_pollution?lat=35.17944&lon=129.07556&appid=7d9433de9290a17c6ac5fde49cac3591`;//경상남도

    const currentAir11 = `http://api.openweathermap.org/data/2.5/air_pollution?lat=35.15972&lon=126.85306&appid=7d9433de9290a17c6ac5fde49cac3591`;//전라남도

    const currentAir12 = `http://api.openweathermap.org/data/2.5/air_pollution?lat=33.50000&lon=126.51667&appid=7d9433de9290a17c6ac5fde49cac3591`;//제주
    Promise
      .all(
        [axios.get(currentAir1), axios.get(currentAir2), axios.get(currentAir3), axios.get(currentAir4), axios.get(currentAir5), axios.get(currentAir6), axios.get(currentAir7), axios.get(currentAir8), axios.get(currentAir9), axios.get(currentAir10), axios.get(currentAir11), axios.get(currentAir12)])
      .then((values) => {
        setAir(values)
        console.log(values)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  return air;
}

export const Airforecast = () => {  //미세먼지 예보
  const [airforecast, setAirforecast] = useState([]);

  useEffect(() => {

    const currentAir1 = `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=37.71417&lon=26.45250&appid=7d9433de9290a17c6ac5fde49cac3591`;// 서해5도

    const currentAir2 = `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=37.56667&lon=126.97806&appid=7d9433de9290a17c6ac5fde49cac3591`; //서울

    const currentAir3 = `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=37.34167&lon=127.92083&appid=7d9433de9290a17c6ac5fde49cac3591`;//강원영서

    const currentAir4 = `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=37.75000&lon=128.88333&appid=7d9433de9290a17c6ac5fde49cac3591`;//강원영동

    const currentAir5 = `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=37.512899&lon=130.826678&appid=7d9433de9290a17c6ac5fde49cac3591`;//울릉독도

    const currentAir6 = `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=36.78500&lon=126.45056&appid=7d9433de9290a17c6ac5fde49cac3591`; //충청남도

    const currentAir7 = `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=36.99278&lon=127.92611&appid=7d9433de9290a17c6ac5fde49cac3591`; //충청북도

    const currentAir8 = `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=36.01944&lon=129.34167&appid=7d9433de9290a17c6ac5fde49cac3591`;//경상북도

    const currentAir9 = `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=35.82500&lon=127.15000&appid=7d9433de9290a17c6ac5fde49cac3591`;//전라북도

    const currentAir10 = `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=35.17944&lon=129.07556&appid=7d9433de9290a17c6ac5fde49cac3591`;//경상남도

    const currentAir11 = `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=35.15972&lon=126.85306&appid=7d9433de9290a17c6ac5fde49cac3591`;//전라남도

    const currentAir12 = `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=33.50000&lon=126.51667&appid=7d9433de9290a17c6ac5fde49cac3591`;//제주
    Promise
      .all(
        [axios.get(currentAir1), axios.get(currentAir2), axios.get(currentAir3), axios.get(currentAir4), axios.get(currentAir5), axios.get(currentAir6), axios.get(currentAir7), axios.get(currentAir8), axios.get(currentAir9), axios.get(currentAir10), axios.get(currentAir11), axios.get(currentAir12)])
      .then((values) => {
        setAirforecast(values)
        console.log(values)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  return airforecast;
}