import { useQueries } from '@tanstack/react-query';
import { getAirPollution, getAirPollutionForecast } from '../api/openweather';
import { AIR_COORDS } from '../constants/regions';

interface AqiState {
  data: number[]; // AIR_COORDS 순서의 지역별 aqi
  isLoading: boolean;
  isError: boolean;
}

// 현재 미세먼지 (좌표 20곳 병렬 → aqi 배열)
export const useCurrentAqi = (): AqiState =>
  useQueries({
    queries: AIR_COORDS.map((coord) => ({
      queryKey: ['air', coord],
      queryFn: () => getAirPollution(coord),
    })),
    combine: (results): AqiState => ({
      data: results.map((r) => r.data?.list[0].main.aqi ?? 0),
      isLoading: results.some((r) => r.isLoading),
      isError: results.some((r) => r.isError),
    }),
  });

// 미세먼지 예보 (좌표 20곳 병렬 → 특정 시점 인덱스의 aqi 배열, 내일/모레가 캐시 공유)
export const useForecastAqi = (index: number): AqiState =>
  useQueries({
    queries: AIR_COORDS.map((coord) => ({
      queryKey: ['air-forecast', coord],
      queryFn: () => getAirPollutionForecast(coord),
    })),
    combine: (results): AqiState => ({
      data: results.map((r) => r.data?.list[index].main.aqi ?? 0),
      isLoading: results.some((r) => r.isLoading),
      isError: results.some((r) => r.isError),
    }),
  });
