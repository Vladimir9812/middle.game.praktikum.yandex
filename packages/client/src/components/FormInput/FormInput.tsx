import { Box, FormErrorMessage, Input } from '@chakra-ui/react';

type FormInputProperties = {
  name: string;
  placeholder: string;
  isInvalid: boolean;
  value?: string;
  type?: string;
  errorMessage?: string;
  mb: number;
};

export function FormInput(properties: FormInputProperties) {
  const {
    name,
    placeholder,
    isInvalid,
    value = '',
    type = 'text',
    errorMessage = '',
    mb,
  } = properties;
  console.log(value);
  return (
    <Box mb={mb}>
      <Input
        type={type}
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
        _hover={{
          background: 'white',
        }}
        _placeholder={{
          textAlign: 'center',
        }}
      />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </Box>
  );
}
