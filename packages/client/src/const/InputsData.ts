import { Input } from '../types/Input';

const enum InputNames {
  name = 'first_name',
  login = 'login',
  phone = 'phone',
  email = 'email',
  password = 'password',
  passwordRepeat = 'password_repeat',
}

const inputs: Array<Input> = [
  {
    name: InputNames.name,
    placeholder: 'Enter your name',
    label: 'Name',
  },
  {
    name: InputNames.login,
    placeholder: 'Enter your nickname',
    label: 'Nickname',
  },
  {
    name: InputNames.phone,
    placeholder: 'Enter your phone',
    label: 'Phone',
  },
  {
    name: InputNames.email,
    placeholder: 'Enter your email',
  },
  {
    name: InputNames.password,
    placeholder: 'Enter password',
    label: 'Password',
  },
  {
    name: InputNames.passwordRepeat,
    placeholder: 'Repeat password',
    label: 'Repeat password',
  },
];

export const profileInputs = inputs;
export const loginInputs = inputs.filter(
  (input: Input) => input.name === InputNames.login || input.name === InputNames.password,
);
