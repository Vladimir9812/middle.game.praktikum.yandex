import { Form } from '@app/components';

import { profileInputs } from '../../const/InputsData';

const buttonText = 'Sign up';

export function SignUpForm() {
  return Form({ inputs: profileInputs, buttonText });
}
