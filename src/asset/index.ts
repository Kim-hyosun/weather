import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { ForecastData } from '../types';

interface FetchState<T> {
  data: T;
  isLoading: boolean;
  error: string | null;
}

const API_KEY = process.env.REACT_APP_OW_API_KEY;
const BASE = 'https://api.openweathermap.org/data/2.5';

// 날씨 예보용 12개 지역 (forecast 엔드포인트 쿼리)
const FORECAST_REGIONS = [
  'id=1843163', // 서해5도
  'id=1835848', // 서울
  'id=1844045', // 강원영서
  'id=1843137', // 강원영동
  'lat=37.512899&lon=130.826678', // 울릉독도
  'id=1835895', // 충청남도
  'id=1845604', // 충청북도
  'id=1839071', // 경상북도
  'id=1845457', // 전라북도
  'id=1838519', // 경상남도
  'id=1841811', // 전라남도
  'id=1846266', // 제주
];

// 미세먼지용 20개 좌표 (air_pollution 엔드포인트 쿼리)
const AIR_COORDS = [
  'lat=37.71417&lon=26.45250', // 서해5도(인천)
  'lat=37.56667&lon=126.97806', // 서울
  'lat=37.34167&lon=127.92083', // 강원영서
  'lat=37.75000&lon=128.88333', // 강원영동
  'lat=37.512899&lon=130.826678', // 울릉독도
  'lat=36.78500&lon=126.45056', // 충청남도
  'lat=36.99278&lon=127.92611', // 충청북도
  'lat=36.01944&lon=129.34167', // 경상북도
  'lat=35.82500&lon=127.15000', // 전라북도
  'lat=35.17944&lon=129.07556', // 부산
  'lat=35.15972&lon=126.85306', // 광주
  'lat=33.50000&lon=126.51667', // 제주
  'lat=37.73889&lon=127.03444', // 경기북부(의정부)
  'lat=37.26389&lon=127.02861', // 경기남부(수원)
  'lat=36.48750&lon=127.28167', // 세종
  'lat=36.35111&lon=127.38500', // 대전
  'lat=34.95583&lon=127.49028', // 전남(순천)
  'lat=35.53889&lon=129.31667', // 울산
  'lat=35.87222&lon=128.60250', // 대구
  'lat=35.18083&lon=128.60250', // 경남(진주)
];

// 여러 URL을 병렬 요청하고 transform으로 가공한 결과를 반환하는 공통 훅
const useFetchAll = <T,>(
  urls: string[],
  transform: (responses: AxiosResponse[]) => T,
  initialData: T,
): FetchState<T> => {
  const [state, setState] = useState<FetchState<T>>({
    data: initialData,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let active = true;
    Promise.all(urls.map((url) => axios.get(url)))
      .then((res) => {
        if (active) setState({ data: transform(res), isLoading: false, error: null });
      })
      .catch((err) => {
        if (active) {
          setState({
            data: initialData,
            isLoading: false,
            error: err instanceof Error ? err.message : String(err),
          });
        }
      });
    return () => {
      active = false;
    };
    // urls/transform은 상수 기반으로 생성되어 매 렌더 동일하므로 1회만 실행
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
};

const forecastUrls = () =>
  FORECAST_REGIONS.map((q) => `${BASE}/forecast?${q}&lang=kr&appid=${API_KEY}&units=metric`);

const airUrls = (path: string) => AIR_COORDS.map((c) => `${BASE}/${path}?${c}&appid=${API_KEY}`);

// 응답 배열에서 각 지역의 list[idx] aqi만 추출
const pickAqi = (idx: number) => (res: AxiosResponse[]): number[] =>
  res.map((r) => r.data.list[idx].main.aqi);

export const Forecast = () => useFetchAll<ForecastData>(forecastUrls(), (res) => res, []); // 날씨 예보

export const Air = () => useFetchAll<number[]>(airUrls('air_pollution'), pickAqi(0), []); // 현재 미세먼지

export const Airforecast = () =>
  useFetchAll<number[]>(airUrls('air_pollution/forecast'), pickAqi(19), []); // 내일 예보

export const AirforecastMore = () =>
  useFetchAll<number[]>(airUrls('air_pollution/forecast'), pickAqi(38), []); // 모레 예보
