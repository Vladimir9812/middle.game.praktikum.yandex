import { Form } from '@app/components';

import { loginInputs } from '../../const/InputsData';

const buttonText = 'Enter';

export function LoginForm() {
  return Form({ inputs: loginInputs, buttonText, mb: 9 });
}
