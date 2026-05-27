import { useQuery } from '@tanstack/react-query';
import { getCurrentWeather, getForecast } from '../api/openweather';
import { City } from '../types';

// 현재 날씨 (지역별 캐시)
export const useCurrentWeather = (city: City) =>
  useQuery({
    queryKey: ['weather', city.code],
    queryFn: () => getCurrentWeather(city.code),
  });

// 날씨 예보 (지역별 캐시 — 오늘/내일/모레 화면이 같은 캐시를 공유)
export const useForecast = (city: City) =>
  useQuery({
    queryKey: ['forecast', city.code],
    queryFn: () => getForecast(city.code),
  });
