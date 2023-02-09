import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Dust from "./Dust";
import Weather from "./Weather";

function Current() {
  const [data, setData] =useState([]);

  useEffect(()=>{
  const URL =`https://api.openweathermap.org/data/2.5/forecast?id=1835848&lang=kr&appid=7d9433de9290a17c6ac5fde49cac3591&units=metric`; //서울
    
    axios
      .get(URL)
      .then(res => {
        setData(res.data.list)
        console.log(res.data.list)
      })
      .catch(err => {
        console.log(err)
      })
  },[])

  return (
    <>
      <Weather data={data} />
      <Dust data={data} />
    </>
  );
}

export default Current;