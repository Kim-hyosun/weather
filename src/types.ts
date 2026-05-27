import { AxiosResponse } from 'axios';

// *WeatherData가 map으로 내려주는 단일 지역 정보
export interface City {
  id: number;
  name: string;
  code: string;
}

// 지역별 미세먼지 지수(aqi) 배열
export type AqiList = number[];

// 날씨 예보 응답 배열 (현재 화면에선 전달만 되고 직접 사용되진 않음)
export type ForecastData = AxiosResponse[];
