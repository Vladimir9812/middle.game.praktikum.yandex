import { createAsyncThunk } from '@reduxjs/toolkit';

import { GameApi } from '@app/api';

import { AnyObject } from '../../types/AnyObject';

const gameApi = new GameApi();

export const sendScore = createAsyncThunk('sendScore', async (score: AnyObject) =>
  gameApi.sendScore(score),
);

export const getTeamLeaderboard = createAsyncThunk(
  'getTeamLeaderboard',
  async (leaderboardData: AnyObject) => gameApi.getTeamLeaderboard(leaderboardData),
);

export const getLeaderboard = createAsyncThunk(
  'getLeaderboard',
  async (leaderboardData: AnyObject) => gameApi.getLeaderboard(leaderboardData),
);
