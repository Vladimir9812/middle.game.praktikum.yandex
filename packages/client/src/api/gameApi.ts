import { AnyObject } from '../types/AnyObject';

import { BaseApi } from './baseApi';

const enum GameApiRoutes {
  BASE = 'leaderboard',
  ALL = 'all',
}

const baseGameApi = new BaseApi(GameApiRoutes.BASE, true);

export class GameApi {
  public async sendScore(score: AnyObject) {
    return baseGameApi.post({ data: score });
  }
}
