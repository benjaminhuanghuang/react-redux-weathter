import axios from "axios";

const API_KEY = "6a78596d062df78380eff5944c4e5567";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

import { FETCH_WEATHER } from './types';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}