import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { WeatherAPI } from '../../api/weather-api';

const initialState = {
  data: {},
  loading: false,
  error: null,
  success: false,
};

export const fetchCurrent = createAsyncThunk('current/fetchCurrent', async ({ lat, lon }) => {
  const response = await WeatherAPI.getCurrent({ lat, lon });
  return response;
});

const currentSlice = createSlice({
  name: 'current',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCurrent.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCurrent.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.success = true;
    });
    builder.addCase(fetchCurrent.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.error?.message;
    });
  },
});

export default currentSlice.reducer;
