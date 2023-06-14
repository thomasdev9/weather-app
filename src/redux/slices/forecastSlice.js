import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { WeatherAPI } from '../../api/weather-api';

const initialState = {
  data: {},
  loading: false,
  error: null,
  success: false,
};

export const fetchForecast = createAsyncThunk('current/fetchForecastWeather', async ({ lat, lon, cnt }) => {
  const response = await WeatherAPI.getForecast({ lat, lon, cnt });
  return response;
});

const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchForecast.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchForecast.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action?.payload;
      state.success = true;
    });
    builder.addCase(fetchForecast.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.error?.message;
    });
  },
});

export default forecastSlice.reducer;
