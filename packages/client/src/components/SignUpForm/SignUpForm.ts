import { Form } from '../Form/Form';

const inputs = [
  {
    name: 'first_name',
    placeholder: 'Enter your name',
  },
  {
    name: 'login',
    placeholder: 'Enter your nickname',
  },
  {
    name: 'phone',
    placeholder: 'Enter your phone',
  },
  {
    name: 'email',
    placeholder: 'Enter your email',
  },
  {
    name: 'password',
    placeholder: 'Enter password',
  },
  {
    name: 'password_repeat',
    placeholder: 'Repeat password',
  },
];

const buttonText = 'Sign up';

export function SignUpForm() {
  return Form({ inputs, buttonText });
}
