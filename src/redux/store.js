import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import currentReducers from './slices/currentSlice';
import forecastReducers from './slices/forecastSlice';

const reducer = combineReducers({
  current: currentReducers,
  forecast: forecastReducers,
});

export const store = configureStore({
  reducer,
});
