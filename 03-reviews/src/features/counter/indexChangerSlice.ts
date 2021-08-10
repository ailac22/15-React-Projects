import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Review } from '../../Types/Review'
import reviews from '../../data'
import { Random } from "random-js";


const rand: Random = new Random(); // uses the nativeMath engine


export interface ShowPersonState {
  index: number;
  reviews: Review[];
  currentReview: Review;
}


const currentReview:Review = reviews[0];

const initialState: ShowPersonState = {
  index: 0,
  reviews: reviews,
  currentReview: currentReview
};

export const indexChangerSlice = createSlice({
  name: 'indexChanger',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.index = Math.min(state.index + 1,state.reviews.length - 1);
      state.currentReview = state.reviews[state.index]
    },
    decrement: (state) => {
      state.index = Math.max(state.index - 1,0);
      state.currentReview = state.reviews[state.index]
    },
    random: (state) => {
      
      let value = -1;
      do {
        value = rand.integer(0, state.reviews.length - 1);
      } while (value === state.index);

      state.index = value;
      state.currentReview = state.reviews[state.index]
    },
  },

});

export const { increment, decrement, random } = indexChangerSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectReview = (state: RootState) => state.reviews.currentReview;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount: number): AppThunk => (
//   dispatch,
//   getState
// ) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default indexChangerSlice.reducer;
