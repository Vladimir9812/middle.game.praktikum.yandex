// For correct redux slice working
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

// type TUser = {
//   id: number;
//   first_name: string;
//   second_name: string;
//   display_name: string;
//   phone: string;
//   login: string;
//   avatar: string;
//   email: string;
// };
interface UserState {
  user: unknown | null;
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  // user: null, ошибка lint
  user: undefined,
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUser(state) {
      state.isLoading = true;
    },
    fetchUserSuccess(state, action) {
      state.isLoading = false;
      state.user = action.payload;
      state.error = '';
    },
    fetchUserError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchUser, fetchUserSuccess, fetchUserError } = userSlice.actions;
export default userSlice.reducer;
