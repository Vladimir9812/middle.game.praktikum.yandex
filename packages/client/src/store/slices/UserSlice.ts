// For correct redux slice working
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { changeAvatar, changeProfile, getUser, signin, TUser } from './UserActionCreators';

interface UserState {
  user: TUser | undefined;
  isLoading: boolean;
  error: string | undefined;
}

const initialState: UserState = {
  user: undefined,
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      .addCase(signin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signin.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(signin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      .addCase(changeProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changeProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(changeProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      .addCase(changeAvatar.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changeAvatar.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(changeAvatar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
