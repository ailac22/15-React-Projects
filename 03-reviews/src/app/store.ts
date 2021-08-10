import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import reviewsReducer from '../features/counter/indexChangerSlice';

export const store = configureStore({
  reducer: {
    reviews: reviewsReducer,
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
