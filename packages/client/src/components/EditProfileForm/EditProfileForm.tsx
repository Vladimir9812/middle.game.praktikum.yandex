import { FormControl } from '@chakra-ui/react';
import { Fragment } from 'react';

import { FormInput, FormButton } from '@app/components';

const inputs = [
  {
    name: 'first_name',
    text: 'Name',
    placeholder: 'Enter your name',
  },
  {
    name: 'login',
    text: 'Nickname',
    placeholder: 'Enter your nickname',
  },
  {
    name: 'email',
    text: 'Email',
    placeholder: 'Enter your email',
  },
  {
    name: 'phone',
    text: 'Phone',
    placeholder: 'Enter your phone',
  },
  {
    name: 'password',
    text: 'Password',
    placeholder: 'Enter password',
  },
  {
    name: 'password_repeat',
    text: 'Repeat password',
    placeholder: 'Repeat password',
  },
];
const buttonText = 'save';

export function EditProfileForm() {
  return (
    <FormControl as="form" alignItems="center" display="flex" flexDirection="column">
      {inputs.map((input) => (
        <Fragment key={input.name}>
          <span
            style={{
              fontSize: '28px',
              fontWeight: 400,
              textAlign: 'start',
              width: '100%',
              display: 'block',
            }}
          >
            {input.text}
          </span>
          <FormInput
            key={input.name}
            name={input.name}
            placeholder={input.placeholder}
            isInvalid={false}
            mb={4}
          />
        </Fragment>
      ))}
      <FormButton label={buttonText.toUpperCase()} />
    </FormControl>
  );
}
