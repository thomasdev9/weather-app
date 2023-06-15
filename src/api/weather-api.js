import { api } from './configs/axios-configs';
import { defineCancelApiObject } from './configs/axios-utils';

const API_KEY = 'd0a72cc67cb5e71de9ddf87aeca1b387';

export const WeatherAPI = {
  getCurrent: async function ({ lat, lon, cancel = false }) {
    const response = await api.request({
      url: '/weather/',
      method: 'GET',
      params: {
        lat: lat,
        lon: lon,
        appid: API_KEY,
        units: 'metric',
      },
      signal: cancel ? cancelApiObject[this.getCurrent.name].handleRequestCancellation().signal : undefined,
    });
    return response.data;
  },
  getForecast: async function ({ lat, lon, cancel = false }) {
    const response = await api.request({
      url: '/forecast/',
      method: 'GET',
      params: {
        lat: lat,
        lon: lon,
        appid: API_KEY,
        units: 'metrics',
      },
      signal: cancel ? cancelApiObject[this.getForecast.name].handleRequestCancellation().signal : undefined,
    });
    return response.data;
  },
};

const cancelApiObject = defineCancelApiObject(WeatherAPI);
