import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import currentReducers from './slices/currentSlice';

const reducer = combineReducers({
  current: currentReducers,
});

export const store = configureStore({
  reducer,
});
