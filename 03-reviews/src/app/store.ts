import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import indexChangerReducer from '../features/counter/indexChangerSlice';

export const store = configureStore({
  reducer: {
    index: indexChangerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
