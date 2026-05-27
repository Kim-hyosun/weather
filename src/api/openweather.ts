import axios from 'axios';

const API_KEY = process.env.REACT_APP_OW_API_KEY;
const BASE = 'https://api.openweathermap.org/data/2.5';

export interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface WeatherMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
}

export interface CurrentWeatherResponse {
  main: WeatherMain;
  weather: WeatherCondition[];
}

export interface ForecastItem {
  dt: number;
  main: WeatherMain;
  weather: WeatherCondition[];
}

export interface ForecastResponse {
  list: ForecastItem[];
}

export interface AirPollutionResponse {
  list: { main: { aqi: number } }[];
}

// 현재 날씨 (지역 1곳)
export const getCurrentWeather = async (code: string): Promise<CurrentWeatherResponse> => {
  const { data } = await axios.get<CurrentWeatherResponse>(
    `${BASE}/weather?${code}&lang=kr&appid=${API_KEY}&units=metric`,
  );
  return data;
};

// 날씨 예보 (지역 1곳, 오늘/내일/모레가 인덱스로 공유)
export const getForecast = async (code: string): Promise<ForecastResponse> => {
  const { data } = await axios.get<ForecastResponse>(
    `${BASE}/forecast?${code}&lang=kr&appid=${API_KEY}&units=metric`,
  );
  return data;
};

// 현재 미세먼지 (좌표 1곳)
export const getAirPollution = async (coord: string): Promise<AirPollutionResponse> => {
  const { data } = await axios.get<AirPollutionResponse>(
    `${BASE}/air_pollution?${coord}&appid=${API_KEY}`,
  );
  return data;
};

// 미세먼지 예보 (좌표 1곳, 내일/모레가 인덱스로 공유)
export const getAirPollutionForecast = async (coord: string): Promise<AirPollutionResponse> => {
  const { data } = await axios.get<AirPollutionResponse>(
    `${BASE}/air_pollution/forecast?${coord}&appid=${API_KEY}`,
  );
  return data;
};
