import { createAsyncThunk } from '@reduxjs/toolkit';

import { UserApi, AuthApi } from '@app/api';

import { AnyObject } from '../../types/AnyObject';

const userApi = new UserApi();
const authApi = new AuthApi();

export type TUser = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
  login: string;
  avatar: string;
  email: string;
};
// данные для запроса
const user = {
  login: 'lertwq',
  password: 'Aswee11111',
};

export const getUser = createAsyncThunk('getUser', async () => authApi.getUser());
// запрос для получения куков
export const signin = createAsyncThunk('signin', async () => authApi.signin(user));

export const changeProfile = createAsyncThunk('changeProfile', async (userData: AnyObject) =>
  userApi.changeProfile(userData),
);

export const changePassword = createAsyncThunk('changeProfile', async (passwordData: AnyObject) =>
  userApi.changePassword(passwordData),
);

export const changeAvatar = createAsyncThunk('changeAvatar', async (formData: FormData) =>
  userApi.changeAvatar(formData),
);
