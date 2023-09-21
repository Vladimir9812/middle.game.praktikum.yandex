import { Button } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

type Properties = {
  label: string;
  isDisabled: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export function FormButton({ isDisabled, label, onClick }: Properties) {
  return (
    <Button isDisabled={isDisabled} size="lg" colorScheme="red" onClick={onClick} type="submit">
      {label}
    </Button>
  );
}
