import { AppDispatch } from '@app/store';

import { userSlice } from './UserSlice';

// TODO: для запросов
// const baseUrl = 'ya-praktikum.tech/api/v2';

// eslint-disable-next-line unicorn/consistent-function-scoping
export const fetchUser = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.fetchUser());
    // TODO: заменить адрес
    // baseUrl + '/auth/user'
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // заменить обработку ответа
    // это для примера работы с асинхронными запросами
    const data = await response.json();
    delete data[0].address;
    delete data[0].company;
    delete data[0].website;
    dispatch(userSlice.actions.fetchUserSuccess(data[0]));
  } catch (error) {
    dispatch(userSlice.actions.fetchUserError(error));
  }
};

// TODO: для запроса смены аватара
// export const changeAvatar = async (formData: FormData) => async () => {
// try {
// dispatch()
// const formData = new FormData(avatar);
// const response = await fetch(`${baseUrl}/auth/user`, {
//   method: 'POST',
//   body: formData,
// });
// console.log(await response);
// dispatch()
// } catch {
// dispatch()
// }
// };
