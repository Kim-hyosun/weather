// forecast 응답: 3시간 간격 list 중 시점 인덱스
export const FORECAST_INDEX = {
  today: 0,
  tomorrow: 10,
  more: 18,
} as const;

// air_pollution/forecast 응답: 1시간 간격 list 중 시점 인덱스
export const AQI_FORECAST_INDEX = {
  tomorrow: 19,
  more: 38,
} as const;
