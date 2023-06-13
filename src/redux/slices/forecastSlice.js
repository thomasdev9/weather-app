import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
  loading: false,
  error: null,
  success: false,
};

const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {},
});

export default forecastSlice.reducer;
