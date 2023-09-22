/* eslint-disable react/jsx-props-no-spreading */

import { FormControl } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
// eslint-disable-next-line import/no-extraneous-dependencies
import { joiResolver } from '@hookform/resolvers/joi';
import Joi, { PartialSchemaMap } from 'joi';

import { FormButton, FormInput } from '@app/components';
import { Input } from '@app/types';

type Properties = {
  inputs: Array<Input>;
  buttonText: string;
  mb: number;
  validationSchema: PartialSchemaMap<any>;
};

export function Form({ inputs, buttonText, mb, validationSchema }: Properties) {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    resolver: joiResolver(Joi.object(validationSchema)),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  return (
    <FormControl
      isInvalid={!isValid}
      onSubmit={handleSubmit((d) => console.log(d))}
      as="form"
      alignItems="center"
      display="flex"
      flexDirection="column"
    >
      {inputs.map((input) => (
        <FormInput
          {...register(input.name)}
          mb={mb}
          key={input.name}
          name={input.name}
          placeholder={input.placeholder}
          isInvalid={!!errors[`${input.name}`]}
          errorMessage={errors[`${input.name}`]?.message?.toString()}
        />
      ))}
      <FormButton isDisabled={!isValid} label={buttonText.toUpperCase()} />
    </FormControl>
  );
}
