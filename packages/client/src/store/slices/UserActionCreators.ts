import { createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://ya-praktikum.tech/api/v2';

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

export const changeProfile = createAsyncThunk('changeProfile', async (userData) => {
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

export const changePassword = createAsyncThunk('changeProfile', async (passwordData) => {
  const response = await fetch(`${baseUrl}/user/password`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(passwordData),
    credentials: 'include',
  });
  return response.json();
});

export const changeAvatar = createAsyncThunk('changeAvatar', async (formData) => {
  const response = await fetch(`${baseUrl}/user/profile/avatar`, {
    method: 'PUT',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    body: formData,
    credentials: 'include',
  });
  return response.json();
});
