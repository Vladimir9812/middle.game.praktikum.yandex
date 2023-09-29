/* eslint-disable react/jsx-props-no-spreading */
import { Flex, FormControl, FormLabel } from '@chakra-ui/react';
import { FieldValues, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi, { PartialSchemaMap } from 'joi';

import { FormButton, FormInput } from '@app/components';
import { Field, FieldName } from '@app/types';

type Properties = {
  inputs: Array<Field>;
  buttonText: string;
  mb: number;
  validationSchema: PartialSchemaMap<any>;
  onSubmit?: (values: FieldValues) => void;
  initialValues?: Record<Partial<FieldName>, string>;
  withLabel?: boolean;
};

export function Form({
  inputs,
  buttonText,
  mb,
  validationSchema,
  initialValues,
  onSubmit = (values: FieldValues) => {
    console.log(values);
  },
  withLabel = false,
}: Properties) {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: initialValues,
    resolver: joiResolver(Joi.object(validationSchema)),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  return (
    <FormControl
      isInvalid={!isValid}
      onSubmit={handleSubmit(onSubmit)}
      as="form"
      alignItems="center"
      display="flex"
      flexDirection="column"
    >
      {inputs.map((input: Field) => {
        const { name, placeholder, type, label } = input;
        if (withLabel) {
          return (
            <Flex alignItems="center" gap={5} w="70%" justifyContent="space-between" key={name}>
              <FormLabel htmlFor={name}>{label}</FormLabel>
              <FormInput
                {...register(name)}
                mb={mb}
                key={name}
                name={name}
                type={type}
                placeholder={placeholder}
                isInvalid={!!errors[`${name}`]}
                errorMessage={errors[`${name}`]?.message?.toString()}
              />
            </Flex>
          );
        }
        return (
          <FormInput
            {...register(name)}
            mb={mb}
            key={name}
            name={name}
            type={type}
            placeholder={placeholder}
            isInvalid={!!errors[`${name}`]}
            errorMessage={errors[`${name}`]?.message?.toString()}
          />
        );
      })}
      <FormButton isDisabled={!isValid} label={buttonText.toUpperCase()} />
    </FormControl>
  );
}
