import { AnyObject } from '../types/AnyObject';

import { BaseApi } from './baseApi';

const enum AuthApiRoutes {
  BASE = 'auth',
  SIGNIN = 'signin',
  USER = 'user',
}

const baseUserApi = new BaseApi(AuthApiRoutes.BASE, true);

export class AuthApi {
  public async signin(user: AnyObject) {
    return baseUserApi.post({ route: AuthApiRoutes.SIGNIN, data: user });
  }

  public async getUser() {
    return baseUserApi.get({ route: AuthApiRoutes.USER });
  }
}
