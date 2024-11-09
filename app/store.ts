import {configureStore} from '@reduxjs/toolkit';
import homeReducer from './features/home/home.slice';
import massesReducer from './features/mass/mass.slice';
import prayersReducer from './features/prayers/prayers.slice';
import rosariesReducer from './features/rosaries/rosaries.slice';

const store = configureStore({
  reducer: {
    home: homeReducer,
    rosaries: rosariesReducer,
    masses: massesReducer,
    prayers: prayersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
