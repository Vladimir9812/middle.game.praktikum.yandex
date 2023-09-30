import { BaseApi } from './baseApi';

const enum AuthApiRoutes {
  BASE = 'auth',
  SIGNIN = 'signin',
  SIGNUP = 'signup',
  USER = 'user',
  LOGOUT = 'logout',
}

type LoginData = {
  login: string;
  password: string;
};

type SignUpData = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

const baseUserApi = new BaseApi(AuthApiRoutes.BASE, true);

export class AuthApi {
  public async signin(loginData: LoginData) {
    return baseUserApi.post({ route: AuthApiRoutes.SIGNIN, data: loginData });
  }

  public async getUser() {
    return baseUserApi.get({ route: AuthApiRoutes.USER });
  }

  public async signup(signupData: SignUpData) {
    return baseUserApi.post({ route: AuthApiRoutes.SIGNUP, data: signupData });
  }

  public async logout() {
    return baseUserApi.post({ route: AuthApiRoutes.LOGOUT });
  }
}
