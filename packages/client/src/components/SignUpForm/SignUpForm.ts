import { Form } from '@app/components';

import { profileFields, profileSchema } from '../../const';

const buttonText = 'Sign up';
export function SignUpForm() {
  return Form({ inputs: profileFields, buttonText, mb: 3, validationSchema: profileSchema });
}
