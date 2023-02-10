import axios from 'axios';
import { useEffect, useState } from 'react';


export const Forecast = () => {
const [data, setData] = useState([]);

useEffect(() => {
  const URL = `http://api.openweathermap.org/data/2.5/forecast?id=1835848&lang=kr&appid=7d9433de9290a17c6ac5fde49cac3591&units=metric`; //서울예보
  
  axios
    .get(URL)
    .then(res => {
      setData(res.data.list)
      // console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
}, []);
  return data;
}  



export const CurrentWeather = () =>{
  const [currentdata, setCurrentdata] = useState([]);

  // const print = (res) => { return res; }
  
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
    ).then((/* res1, res2, res3, res4, res5, res6, res7, res8, res9, res10, res11, res12 */ values) => {
      console.log(values)
      setCurrentdata(values);
          /* let RES1 = res1.data;
          let RES2 = res2.data;
          let RES3 = res3.data;
          let RES4 = res4.data;
          let RES5 = res5.data;
          let RES6 = res6.data;
          let RES7 = res7.data;
          let RES8 = res8.data;
          let RES9 = res9.data;
          let RES10 = res10.data;
          let RES11 = res11.data;
          let RES12 = res12.data;
          let res = [...RES1, ...RES2, ...RES3, ...RES4, ...RES5, ...RES6, ...RES7, ...RES8, ...RES9, ...RES10, ...RES11, ...RES12];
          setCurrentdata(res); */
        }
      ).catch(err => {
        console.log(err)
      })
  }, []) 
  
  /* useEffect(() => {
    const URL1 = `https://api.openweathermap.org/data/2.5/weather?id=1843163&lang=kr&appid=7d9433de9290a17c6ac5fde49cac3591&units=metric`;
    
    axios
      .get(URL1)
      .then(res => {
        setCurrentdata(res.data)
        // console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  useEffect(() => {
    const URL2 = `https://api.openweathermap.org/data/2.5/weather?id=1835848&lang=kr&appid=7d9433de9290a17c6ac5fde49cac3591&units=metric`; //서울
    
    axios
      .get(URL2)
      .then(res => {
        setCurrentdata(currentdata, ...res.data)
        console.log(currentdata)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);
 */

  return currentdata;
}