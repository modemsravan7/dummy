// universitiesSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface University {
  web_pages: string[];
  name: string;
  country: string;
  state_province: string | null;
  alpha_two_code: string;
  domains: string[];
}

interface UniversitiesState {
  data: University[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UniversitiesState = {
  data: [],
  loading: 'idle',
  error: null,
};

export const fetchUniversities = createAsyncThunk('universities/fetch', async () => {
  const response = await axios.get('http://universities.hipolabs.com/search?country=United+States');
  console.log(response.data.slice(0, 10));
  
  return response.data.slice(0, 10);
});

const universitiesSlice = createSlice({
  name: 'universities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUniversities.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchUniversities.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUniversities.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message ?? 'An error occurred';
      });
  },
});
export const universitiesList = (state: { universities: { data: University[] , loading: string, error: string,}; }) => state.universities
export default universitiesSlice.reducer;
