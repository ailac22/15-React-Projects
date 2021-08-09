import { createSlice } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface ShowPersonState {
  index: number;
}

const initialState: ShowPersonState = {
  index: 0
};


export const indexChangerSlice = createSlice({
  name: 'indexChanger',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.index += 1;
    },
    decrement: (state) => {
      state.index -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    random: (state) => {
      state.index += 0;
    },
  },

});

export const { increment, decrement, random } = indexChangerSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectIndex = (state: RootState) => state.index.index;

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
