import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
  loading: false,
  error: null,
  success: false,
};

const currentSlice = createSlice({
  name: 'current',
  initialState,
  reducers: {},
});

export default currentSlice.reducer;
