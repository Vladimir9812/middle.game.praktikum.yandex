import { FormControl } from '@chakra-ui/react';

import { FormButton, FormInput } from '@app/components';

import { Input } from '../../types/Input';

type Properties = {
  inputs: Array<Input>;
  buttonText: string;
};

export function Form({ inputs, buttonText }: Properties) {
  return (
    <FormControl as="form" alignItems="center" display="flex" flexDirection="column">
      {inputs.map((input) => (
        <FormInput
          key={input.name}
          name={input.name}
          placeholder={input.placeholder}
          isInvalid={false}
        />
      ))}
      <FormButton label={buttonText.toUpperCase()} />
    </FormControl>
  );
}
