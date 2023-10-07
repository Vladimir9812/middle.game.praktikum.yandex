import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GameState } from '@app/types';

type GameStateState = {
  gameSate: GameState;
};

const initialState: GameStateState = {
  gameSate: GameState.NotStarted,
};

export const gameStateSlice = createSlice({
  name: 'gameSate',
  initialState,
  reducers: {
    setGameState(state, action: PayloadAction<GameState>) {
      // eslint-disable-next-line no-param-reassign
      state.gameSate = action.payload;
    },
  },
});

export const gameStateActions = gameStateSlice.actions;
export default gameStateSlice.reducer;
