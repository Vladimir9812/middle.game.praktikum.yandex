import { Box, FormErrorMessage, Textarea } from '@chakra-ui/react';
import { ChangeEvent } from 'react';

type FormInputProperties = {
  name: string;
  placeholder: string;
  isInvalid: boolean;
  value?: string;
  errorMessage?: string;
  height?: string;
  onChange?: (event: ChangeEvent) => void;
};

export function FormTextArea(properties: FormInputProperties) {
  const {
    name,
    placeholder,
    isInvalid,
    value = '',
    errorMessage = '',
    height = 'auto',
    onChange = (e) => console.log(e.target),
  } = properties;
  console.log(value);
  return (
    <Box mb={8}>
      <Textarea
        name={name}
        isInvalid={isInvalid}
        placeholder={placeholder.toUpperCase()}
        size="lg"
        width="lg"
        borderRadius={4}
        borderWidth={3}
        borderColor="blue"
        focusBorderColor="blue"
        bg="white"
        textAlign="center"
        h={height}
        onChange={onChange}
      />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </Box>
  );
}
