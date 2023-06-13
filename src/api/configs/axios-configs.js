import axios from 'axios';

export const api = axios.create({
  widthCredentials: true,
  baseUrl: 'https://api.openweathermap.org/data/2.5',
});

const errorHandler = (error) => {
  const statusCode = error?.response?.status;

  if (statusCode && statusCode !== 401) {
    console.log(error);
  }

  return Promise.reject(error);
};

api.interceptors.response.use(undefined, (error) => {
  return errorHandler(error);
});
