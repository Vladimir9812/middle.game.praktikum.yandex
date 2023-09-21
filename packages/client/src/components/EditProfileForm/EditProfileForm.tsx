import { FormControl, FormLabel } from '@chakra-ui/react';
import { Fragment } from 'react';

import { FormInput, FormButton } from '@app/components';

const inputs = [
  {
    name: 'first_name',
    label: 'Name',
    placeholder: 'Enter your name',
  },
  {
    name: 'login',
    label: 'Nickname',
    placeholder: 'Enter your nickname',
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
  },
  {
    name: 'phone',
    label: 'Phone',
    placeholder: 'Enter your phone',
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Enter password',
  },
  {
    name: 'password_repeat',
    label: 'Repeat password',
    placeholder: 'Repeat password',
  },
];
const buttonText = 'save';

const handleEditClick = () => {
  // TODO: для отправки данных на изменение
};

export function EditProfileForm() {
  return (
    <FormControl as="form" alignItems="center" display="flex" flexDirection="column">
      {inputs.map((input) => (
        <Fragment key={input.name}>
          <FormLabel
            htmlFor={input.name}
            fontSize="2xl"
            textAlign="start"
            width="100%"
            display="block"
          >
            {input.label}
          </FormLabel>
          <FormInput
            key={input.name}
            name={input.name}
            placeholder={input.placeholder}
            isInvalid={false}
            mb={4}
            id={input.name}
          />
        </Fragment>
      ))}
      <FormButton label={buttonText.toUpperCase()} onClick={handleEditClick} />
    </FormControl>
  );
}
