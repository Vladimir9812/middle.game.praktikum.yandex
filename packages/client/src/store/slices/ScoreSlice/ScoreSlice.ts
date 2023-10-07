import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ScoreState = {
  score: number;
};

const initialState: ScoreState = {
  score: 0,
};

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    setScore(state, action: PayloadAction<number>) {
      // eslint-disable-next-line no-param-reassign
      state.score = action.payload;
    },
  },
});

const { actions, reducer } = scoreSlice;

export const scoreActions = actions;
export default reducer;
