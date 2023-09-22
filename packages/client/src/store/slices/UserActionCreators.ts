import { createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://ya-praktikum.tech/api/v2';

type FormDataUser = {
  [key: string]: string;
};

export const fetchData = createAsyncThunk('fetchData', async () => {
  const response = await fetch(`${baseUrl}/auth/user`, {
    credentials: 'include',
  });
  return response.json();
});

// данные для запроса
const user = {
  login: 'Korol123',
  password: 'korol123',
};

// запрос для получения куков
export const fetchDataUser = createAsyncThunk('fetchDataUser', async () => {
  const response = await fetch(`${baseUrl}/auth/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(user),
    credentials: 'include',
  });
  return response.json();
});

export const changeProfile = createAsyncThunk('changeProfile', async (userData: FormDataUser) => {
  const response = await fetch(`${baseUrl}/user/profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
    credentials: 'include',
  });
  return response.json();
});

export const changePassword = createAsyncThunk(
  'changeProfile',
  async (passwordData: FormDataUser) => {
    const response = await fetch(`${baseUrl}/user/password`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(passwordData),
      credentials: 'include',
    });
    return response.json();
  },
);

export const changeAvatar = createAsyncThunk('changeAvatar', async (formData: FormData) => {
  const response = await fetch(`${baseUrl}/user/profile/avatar`, {
    method: 'PUT',
    body: formData,
    credentials: 'include',
  });
  return response.json();
});
