import { Form } from '@app/components';
import { registerFields, signupSchema } from '@app/const';

const buttonText = 'Sign up';
export function SignUpForm() {
  return Form({ inputs: registerFields, buttonText, mb: 3, validationSchema: signupSchema });
}
