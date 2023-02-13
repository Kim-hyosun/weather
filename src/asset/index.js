import axios from 'axios';
import { useEffect, useState } from 'react';


export const Forecast = () => { //  날씨 예보 
  const [data, setData] = useState([]);

  useEffect(() => {

    const Link1 = `https://api.openweathermap.org/data/2.5/forecast?id=1843163&lang=kr&appid=038d154e9b9e548e27fb2ea1e227aded&units=metric`; // 서해5도

    const Link2 = `https://api.openweathermap.org/data/2.5/forecast?id=1835848&lang=kr&appid=038d154e9b9e548e27fb2ea1e227aded&units=metric`; //서울

    const Link3 = `https://api.openweathermap.org/data/2.5/forecast?id=1844045&lang=kr&appid=038d154e9b9e548e27fb2ea1e227aded&units=metric`; //강원영서

    const Link4 = `https://api.openweathermap.org/data/2.5/forecast?id=1843137&lang=kr&appid=038d154e9b9e548e27fb2ea1e227aded&units=metric`; //강원영동

    const Link5 = `https://api.openweathermap.org/data/2.5/forecast?lat=37.512899&lon=130.826678&lang=kr&appid=038d154e9b9e548e27fb2ea1e227aded&units=metric`; //울릉독도

    const Link6 = `https://api.openweathermap.org/data/2.5/forecast?id=1835895&lang=kr&appid=038d154e9b9e548e27fb2ea1e227aded&units=metric`; //충청남도

    const Link7 = `https://api.openweathermap.org/data/2.5/forecast?id=1845604&lang=kr&appid=038d154e9b9e548e27fb2ea1e227aded&units=metric`; //충청북도

    const Link8 = `https://api.openweathermap.org/data/2.5/forecast?id=1839071&lang=kr&appid=038d154e9b9e548e27fb2ea1e227aded&units=metric`; //경상북도

    const Link9 = `https://api.openweathermap.org/data/2.5/forecast?id=1845457&lang=kr&appid=038d154e9b9e548e27fb2ea1e227aded&units=metric`;  //전라북도

    const Link10 = `https://api.openweathermap.org/data/2.5/forecast?id=1838519&lang=kr&appid=038d154e9b9e548e27fb2ea1e227aded&units=metric`; //경상남도

    const Link11 = `https://api.openweathermap.org/data/2.5/forecast?id=1841811&lang=kr&appid=038d154e9b9e548e27fb2ea1e227aded&units=metric`; //전라남도

    const Link12 = `https://api.openweathermap.org/data/2.5/forecast?id=1846266&lang=kr&appid=038d154e9b9e548e27fb2ea1e227aded&units=metric`; //제주

    Promise
      .all(
        [axios.get(Link1), axios.get(Link2), axios.get(Link3), axios.get(Link4), axios.get(Link5), axios.get(Link6), axios.get(Link7), axios.get(Link8), axios.get(Link9), axios.get(Link10), axios.get(Link11), axios.get(Link12)])
      .then((values) => {
        setData(values)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);
  return data;
}

/* export const CurrentWeather = () => {  //현재 날씨
  const [currentdata, setCurrentdata] = useState([]);

  useEffect(() => {

    const URL1 = `https://api.openweathermap.org/data/2.5/weather?id=1843163&lang=kr&appid=038d154e9b9e548e27fb2ea1e227aded&units=metric`; // 서해5도

    const URL2 = `https://api.openweathermap.org/data/2.5/weather?id=1835848&lang=kr&appid=038d154e9b9e548e27fb2ea1e227aded&units=metric`; //서울

    const URL3 = `https://api.openweathermap.org/data/2.5/weather?id=1844045&lang=kr&appid=038d154e9b9e548e27fb2ea1e227aded&units=metric`; //강원영서

    const URL4 = `https://api.openweathermap.org/data/2.5/weather?id=1843137&lang=kr&appid=038d154e9b9e548e27fb2ea1e227aded&units=metric`; //강원영동

    const URL5 = `https://api.openweathermap.org/data/2.5/weather?lat=37.512899&lon=130.826678&lang=kr&appid=038d154e9b9e548e27fb2ea1e227aded&units=metric`; //울릉독도

    const URL6 = `https://api.openweathermap.org/data/2.5/weather?id=1835895&lang=kr&appid=038d154e9b9e548e27fb2ea1e227aded&units=metric`; //충청남도

    const URL7 = `https://api.openweathermap.org/data/2.5/weather?id=1845604&lang=kr&appid=038d154e9b9e548e27fb2ea1e227aded&units=metric`; //충청북도

    const URL8 = `https://api.openweathermap.org/data/2.5/weather?id=1839071&lang=kr&appid=038d154e9b9e548e27fb2ea1e227aded&units=metric`; //경상북도

    const URL9 = `https://api.openweathermap.org/data/2.5/weather?id=1845457&lang=kr&appid=038d154e9b9e548e27fb2ea1e227aded&units=metric`;  //전라북도

    const URL10 = `https://api.openweathermap.org/data/2.5/weather?id=1838519&lang=kr&appid=038d154e9b9e548e27fb2ea1e227aded&units=metric`; //경상남도

    const URL11 = `https://api.openweathermap.org/data/2.5/weather?id=1841811&lang=kr&appid=038d154e9b9e548e27fb2ea1e227aded&units=metric`; //전라남도

    const URL12 = `https://api.openweathermap.org/data/2.5/weather?id=1846266&lang=kr&appid=038d154e9b9e548e27fb2ea1e227aded&units=metric`; //제주


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
} */

export const Air = () => {  //현재 미세먼지
  const [pollution, setPollution] = useState([]);
  

  useEffect(() => {

    const currentAir1 = `https://api.openweathermap.org/data/2.5/air_pollution?lat=37.71417&lon=26.45250&appid=038d154e9b9e548e27fb2ea1e227aded`;// 서해5도;인천

    const currentAir2 = `https://api.openweathermap.org/data/2.5/air_pollution?lat=37.56667&lon=126.97806&appid=038d154e9b9e548e27fb2ea1e227aded`; //서울

    const currentAir3 = `https://api.openweathermap.org/data/2.5/air_pollution?lat=37.34167&lon=127.92083&appid=038d154e9b9e548e27fb2ea1e227aded`;//강원영서

    const currentAir4 = `https://api.openweathermap.org/data/2.5/air_pollution?lat=37.75000&lon=128.88333&appid=038d154e9b9e548e27fb2ea1e227aded`;//강원영동

    const currentAir5 = `https://api.openweathermap.org/data/2.5/air_pollution?lat=37.512899&lon=130.826678&appid=038d154e9b9e548e27fb2ea1e227aded`;//울릉독도

    const currentAir6 = `https://api.openweathermap.org/data/2.5/air_pollution?lat=36.78500&lon=126.45056&appid=038d154e9b9e548e27fb2ea1e227aded`; //충청남도

    const currentAir7 = `https://api.openweathermap.org/data/2.5/air_pollution?lat=36.99278&lon=127.92611&appid=038d154e9b9e548e27fb2ea1e227aded`; //충청북도

    const currentAir8 = `https://api.openweathermap.org/data/2.5/air_pollution?lat=36.01944&lon=129.34167&appid=038d154e9b9e548e27fb2ea1e227aded`;//경상북도

    const currentAir9 = `https://api.openweathermap.org/data/2.5/air_pollution?lat=35.82500&lon=127.15000&appid=038d154e9b9e548e27fb2ea1e227aded`;//전라북도

    const currentAir10 = `https://api.openweathermap.org/data/2.5/air_pollution?lat=35.17944&lon=129.07556&appid=038d154e9b9e548e27fb2ea1e227aded`;//부산

    const currentAir11 = `https://api.openweathermap.org/data/2.5/air_pollution?lat=35.15972&lon=126.85306&appid=038d154e9b9e548e27fb2ea1e227aded`;//광주

    const currentAir12 = `https://api.openweathermap.org/data/2.5/air_pollution?lat=33.50000&lon=126.51667&appid=038d154e9b9e548e27fb2ea1e227aded`;//제주

    const currentAir13 = `https://api.openweathermap.org/data/2.5/air_pollution?lat=37.73889&lon=127.03444&appid=038d154e9b9e548e27fb2ea1e227aded`;//경기북부;의정부

    const currentAir14 = `https://api.openweathermap.org/data/2.5/air_pollution?lat=37.26389&lon=127.02861&appid=038d154e9b9e548e27fb2ea1e227aded`;//경기남부; 수원
   
    const currentAir15 = `https://api.openweathermap.org/data/2.5/air_pollution?lat=36.48750&lon=127.28167&appid=038d154e9b9e548e27fb2ea1e227aded`;// 세종시
    
    const currentAir16 = `https://api.openweathermap.org/data/2.5/air_pollution?lat=36.35111&lon=127.38500&appid=038d154e9b9e548e27fb2ea1e227aded`;// 대전
   
    const currentAir17 = `https://api.openweathermap.org/data/2.5/air_pollution?lat=34.95583&lon=127.49028&appid=038d154e9b9e548e27fb2ea1e227aded`;// 전라남도 ; 순천시
    
    const currentAir18 = `https://api.openweathermap.org/data/2.5/air_pollution?lat=35.53889&lon=129.31667&appid=038d154e9b9e548e27fb2ea1e227aded`;// 울산
    
    const currentAir19 = `https://api.openweathermap.org/data/2.5/air_pollution?lat=35.87222&lon=128.60250&appid=038d154e9b9e548e27fb2ea1e227aded`;// 대구
    
    const currentAir20 = `https://api.openweathermap.org/data/2.5/air_pollution?lat=35.18083&lon=128.60250&appid=038d154e9b9e548e27fb2ea1e227aded`;// 경상남도 ; 진주시


    Promise
      .all(
        [axios.get(currentAir1), axios.get(currentAir2), axios.get(currentAir3), axios.get(currentAir4), axios.get(currentAir5), axios.get(currentAir6), axios.get(currentAir7), axios.get(currentAir8), axios.get(currentAir9), axios.get(currentAir10), axios.get(currentAir11), axios.get(currentAir12), axios.get(currentAir13), axios.get(currentAir14), axios.get(currentAir15), axios.get(currentAir16), axios.get(currentAir17), axios.get(currentAir18), axios.get(currentAir19), axios.get(currentAir20)])
      .then((values) => {
        // setPollution(values)
        // console.log(values)
        let aqi1 = values[0].data.list[0].main.aqi;
        let aqi2 = values[1].data.list[0].main.aqi;
        let aqi3 = values[2].data.list[0].main.aqi;
        let aqi4 = values[3].data.list[0].main.aqi;
        let aqi5 = values[4].data.list[0].main.aqi;
        let aqi6 = values[5].data.list[0].main.aqi;
        let aqi7 = values[6].data.list[0].main.aqi;
        let aqi8 = values[7].data.list[0].main.aqi;
        let aqi9 = values[8].data.list[0].main.aqi;
        let aqi10 = values[9].data.list[0].main.aqi;
        let aqi11 = values[10].data.list[0].main.aqi;
        let aqi12 = values[11].data.list[0].main.aqi;
        let aqi13 = values[12].data.list[0].main.aqi;
        let aqi14 = values[13].data.list[0].main.aqi;
        let aqi15 = values[14].data.list[0].main.aqi;
        let aqi16 = values[15].data.list[0].main.aqi;
        let aqi17 = values[16].data.list[0].main.aqi;
        let aqi18 = values[17].data.list[0].main.aqi;
        let aqi19 = values[18].data.list[0].main.aqi;
        let aqi20 = values[19].data.list[0].main.aqi;
        setPollution([aqi1,aqi2,aqi3,aqi4,aqi5,aqi6,aqi7,aqi8,aqi9,aqi10,aqi11,aqi12,aqi13,aqi14,aqi15,aqi16,aqi17,aqi18,aqi19,aqi20])
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  return pollution;

}

export const Airforecast = () => {  //미세먼지 내일예보
  const [airforecast, setAirforecast] = useState([]);

  useEffect(() => {

    const airtomorrow1 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=37.71417&lon=26.45250&appid=038d154e9b9e548e27fb2ea1e227aded`;// 서해5도;인천

    const airtomorrow2 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=37.56667&lon=126.97806&appid=038d154e9b9e548e27fb2ea1e227aded`; //서울

    const airtomorrow3 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=37.34167&lon=127.92083&appid=038d154e9b9e548e27fb2ea1e227aded`;//강원영서

    const airtomorrow4 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=37.75000&lon=128.88333&appid=038d154e9b9e548e27fb2ea1e227aded`;//강원영동

    const airtomorrow5 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=37.512899&lon=130.826678&appid=038d154e9b9e548e27fb2ea1e227aded`;//울릉독도

    const airtomorrow6 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=36.78500&lon=126.45056&appid=038d154e9b9e548e27fb2ea1e227aded`; //충청남도

    const airtomorrow7 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=36.99278&lon=127.92611&appid=038d154e9b9e548e27fb2ea1e227aded`; //충청북도

    const airtomorrow8 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=36.01944&lon=129.34167&appid=038d154e9b9e548e27fb2ea1e227aded`;//경상북도

    const airtomorrow9 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=35.82500&lon=127.15000&appid=038d154e9b9e548e27fb2ea1e227aded`;//전라북도

    const airtomorrow10 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=35.17944&lon=129.07556&appid=038d154e9b9e548e27fb2ea1e227aded`;//부산

    const airtomorrow11 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=35.15972&lon=126.85306&appid=038d154e9b9e548e27fb2ea1e227aded`;//광주

    const airtomorrow12 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=33.50000&lon=126.51667&appid=038d154e9b9e548e27fb2ea1e227aded`;//제주

    const airtomorrow13 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=37.73889&lon=127.03444&appid=038d154e9b9e548e27fb2ea1e227aded`;//경기북부;의정부

    const airtomorrow14 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=37.26389&lon=127.02861&appid=038d154e9b9e548e27fb2ea1e227aded`;//경기남부; 수원
   
    const airtomorrow15 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=36.48750&lon=127.28167&appid=038d154e9b9e548e27fb2ea1e227aded`;// 세종시
    
    const airtomorrow16 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=36.35111&lon=127.38500&appid=038d154e9b9e548e27fb2ea1e227aded`;// 대전
   
    const airtomorrow17 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=34.95583&lon=127.49028&appid=038d154e9b9e548e27fb2ea1e227aded`;// 전라남도 ; 순천시
    
    const airtomorrow18 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=35.53889&lon=129.31667&appid=038d154e9b9e548e27fb2ea1e227aded`;// 울산
    
    const airtomorrow19 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=35.87222&lon=128.60250&appid=038d154e9b9e548e27fb2ea1e227aded`;// 대구
    
    const airtomorrow20 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=35.18083&lon=128.60250&appid=038d154e9b9e548e27fb2ea1e227aded`;// 경상남도 ; 진주시


    Promise
      .all(
        [axios.get(airtomorrow1), axios.get(airtomorrow2), axios.get(airtomorrow3), axios.get(airtomorrow4), axios.get(airtomorrow5), axios.get(airtomorrow6), axios.get(airtomorrow7), axios.get(airtomorrow8), axios.get(airtomorrow9), axios.get(airtomorrow10), axios.get(airtomorrow11), axios.get(airtomorrow12), axios.get(airtomorrow13), axios.get(airtomorrow14), axios.get(airtomorrow15), axios.get(airtomorrow16), axios.get(airtomorrow17), axios.get(airtomorrow18), axios.get(airtomorrow19), axios.get(airtomorrow20)])
      .then((val) => {
        let aqi1 = val[0].data.list[19].main.aqi;
        let aqi2 = val[1].data.list[19].main.aqi;
        let aqi3 = val[2].data.list[19].main.aqi;
        let aqi4 = val[3].data.list[19].main.aqi;
        let aqi5 = val[4].data.list[19].main.aqi;
        let aqi6 = val[5].data.list[19].main.aqi;
        let aqi7 = val[6].data.list[19].main.aqi;
        let aqi8 = val[7].data.list[19].main.aqi;
        let aqi9 = val[8].data.list[19].main.aqi;
        let aqi10 = val[9].data.list[19].main.aqi;
        let aqi11 = val[10].data.list[19].main.aqi;
        let aqi12 = val[11].data.list[19].main.aqi;
        let aqi13 = val[12].data.list[19].main.aqi;
        let aqi14 = val[13].data.list[19].main.aqi;
        let aqi15 = val[14].data.list[19].main.aqi;
        let aqi16 = val[15].data.list[19].main.aqi;
        let aqi17 = val[16].data.list[19].main.aqi;
        let aqi18 = val[17].data.list[19].main.aqi;
        let aqi19 = val[18].data.list[19].main.aqi;
        let aqi20 = val[19].data.list[19].main.aqi;
        
        setAirforecast([aqi1,aqi2,aqi3,aqi4,aqi5,aqi6,aqi7,aqi8,aqi9,aqi10,aqi11,aqi12,aqi13,aqi14,aqi15,aqi16,aqi17,aqi18,aqi19,aqi20])
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  return airforecast;
}

export const AirforecastMore = () => {  //미세먼지 모레예보
  const [airforecast, setAirforecast] = useState([]);

  useEffect(() => {

    const airtomorrow1 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=37.71417&lon=26.45250&appid=038d154e9b9e548e27fb2ea1e227aded`;// 서해5도;인천

    const airtomorrow2 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=37.56667&lon=126.97806&appid=038d154e9b9e548e27fb2ea1e227aded`; //서울

    const airtomorrow3 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=37.34167&lon=127.92083&appid=038d154e9b9e548e27fb2ea1e227aded`;//강원영서

    const airtomorrow4 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=37.75000&lon=128.88333&appid=038d154e9b9e548e27fb2ea1e227aded`;//강원영동

    const airtomorrow5 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=37.512899&lon=130.826678&appid=038d154e9b9e548e27fb2ea1e227aded`;//울릉독도

    const airtomorrow6 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=36.78500&lon=126.45056&appid=038d154e9b9e548e27fb2ea1e227aded`; //충청남도

    const airtomorrow7 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=36.99278&lon=127.92611&appid=038d154e9b9e548e27fb2ea1e227aded`; //충청북도

    const airtomorrow8 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=36.01944&lon=129.34167&appid=038d154e9b9e548e27fb2ea1e227aded`;//경상북도

    const airtomorrow9 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=35.82500&lon=127.15000&appid=038d154e9b9e548e27fb2ea1e227aded`;//전라북도

    const airtomorrow10 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=35.17944&lon=129.07556&appid=038d154e9b9e548e27fb2ea1e227aded`;//부산

    const airtomorrow11 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=35.15972&lon=126.85306&appid=038d154e9b9e548e27fb2ea1e227aded`;//광주

    const airtomorrow12 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=33.50000&lon=126.51667&appid=038d154e9b9e548e27fb2ea1e227aded`;//제주

    const airtomorrow13 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=37.73889&lon=127.03444&appid=038d154e9b9e548e27fb2ea1e227aded`;//경기북부;의정부

    const airtomorrow14 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=37.26389&lon=127.02861&appid=038d154e9b9e548e27fb2ea1e227aded`;//경기남부; 수원
   
    const airtomorrow15 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=36.48750&lon=127.28167&appid=038d154e9b9e548e27fb2ea1e227aded`;// 세종시
    
    const airtomorrow16 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=36.35111&lon=127.38500&appid=038d154e9b9e548e27fb2ea1e227aded`;// 대전
   
    const airtomorrow17 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=34.95583&lon=127.49028&appid=038d154e9b9e548e27fb2ea1e227aded`;// 전라남도 ; 순천시
    
    const airtomorrow18 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=35.53889&lon=129.31667&appid=7d9433de9290a17c6ac5fde49cac3591`;// 울산
    
    const airtomorrow19 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=35.87222&lon=128.60250&appid=7d9433de9290a17c6ac5fde49cac3591`;// 대구
    
    const airtomorrow20 = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=35.18083&lon=128.60250&appid=7d9433de9290a17c6ac5fde49cac3591`;// 경상남도 ; 진주시


    Promise
      .all(
        [axios.get(airtomorrow1), axios.get(airtomorrow2), axios.get(airtomorrow3), axios.get(airtomorrow4), axios.get(airtomorrow5), axios.get(airtomorrow6), axios.get(airtomorrow7), axios.get(airtomorrow8), axios.get(airtomorrow9), axios.get(airtomorrow10), axios.get(airtomorrow11), axios.get(airtomorrow12), axios.get(airtomorrow13), axios.get(airtomorrow14), axios.get(airtomorrow15), axios.get(airtomorrow16), axios.get(airtomorrow17), axios.get(airtomorrow18), axios.get(airtomorrow19), axios.get(airtomorrow20)])
      .then((val) => {
        let aqi1 = val[0].data.list[38].main.aqi;
        let aqi2 = val[1].data.list[38].main.aqi;
        let aqi3 = val[2].data.list[38].main.aqi;
        let aqi4 = val[3].data.list[38].main.aqi;
        let aqi5 = val[4].data.list[38].main.aqi;
        let aqi6 = val[5].data.list[38].main.aqi;
        let aqi7 = val[6].data.list[38].main.aqi;
        let aqi8 = val[7].data.list[38].main.aqi;
        let aqi9 = val[8].data.list[38].main.aqi;
        let aqi10 = val[9].data.list[38].main.aqi;
        let aqi11 = val[10].data.list[38].main.aqi;
        let aqi12 = val[11].data.list[38].main.aqi;
        let aqi13 = val[12].data.list[38].main.aqi;
        let aqi14 = val[13].data.list[38].main.aqi;
        let aqi15 = val[14].data.list[38].main.aqi;
        let aqi16 = val[15].data.list[38].main.aqi;
        let aqi17 = val[16].data.list[38].main.aqi;
        let aqi18 = val[17].data.list[38].main.aqi;
        let aqi19 = val[18].data.list[38].main.aqi;
        let aqi20 = val[19].data.list[38].main.aqi;
        
        setAirforecast([aqi1,aqi2,aqi3,aqi4,aqi5,aqi6,aqi7,aqi8,aqi9,aqi10,aqi11,aqi12,aqi13,aqi14,aqi15,aqi16,aqi17,aqi18,aqi19,aqi20])
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  return airforecast;
}