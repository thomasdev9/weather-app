import { api } from './configs/axios-configs';
import { defineCandelApiObject } from './configs/axios-utils';

const API_KEY = 'd0a72cc67cb5e71de9ddf87aeca1b387';

export const WeatherAPI = {
  current: async function ({ lat, lon, cancel = false }) {
    const response = await api.request({
      url: '/weather/',
      method: 'GET',
      data: {
        lat: lat,
        lon: lon,
        appid: API_KEY,
      },
      signal: cancel ? cancelApiObject[this.current.name].handleRequestCancellation().signal : undefined,
    });
    return response.data;
  },
  forecast: async function ({ lat, lon, cnt, cancel = false }) {
    const response = await api.request({
      url: '/forecast/daily/',
      method: 'GET',
      data: {
        lat: lat,
        lon: lon,
        appid: API_KEY,
        cnt: cnt,
      },
      signal: cancel ? cancelApiObject[this.forecast.name].handleRequestCancellation().signal : undefined,
    });
    return response.data;
  },
};

const cancelApiObject = defineCandelApiObject(WeatherAPI);
