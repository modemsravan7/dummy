 
import { configureStore } from '@reduxjs/toolkit';
import universitiesReducer, { fetchUniversities } from './universitiesSlice';

export const store = configureStore({
  reducer: {
    universities: universitiesReducer,
  },
});

store.dispatch(fetchUniversities()); // Dispatch the action on app start

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
