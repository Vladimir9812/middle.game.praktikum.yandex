import { Button } from '@chakra-ui/react';

type Properties = {
  label: string;
  type?: 'submit' | 'reset';
  isDisabled: boolean;
};

export function FormButton({ isDisabled, label, type }: Properties) {
  console.log(isDisabled);
  return (
    <Button isDisabled={isDisabled} size="lg" colorScheme="red" type={type ?? 'submit'}>
      {label}
    </Button>
  );
}
