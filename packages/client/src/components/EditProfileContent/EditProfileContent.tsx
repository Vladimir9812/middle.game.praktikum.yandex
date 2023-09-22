import { Button, Flex, Heading } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';

import { EditProfileForm, GoBack } from '@app/components';

export function EditProfileContent({
  handleSaveClick,
  setIsEditing,
}: {
  handleSaveClick: () => void;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Flex display="flex" align="center" justify="center" direction="column">
      <Heading as="h1" fontSize="72px" marginTop="66px" fontWeight="400">
        Edit profile
      </Heading>
      <Flex
        w="935px"
        h="752px"
        borderRadius="15"
        backgroundColor="lightBlue"
        justify="center"
        pt={29}
        direction="column"
        align="center"
        position="relative"
      >
        <Button
          onClick={handleSaveClick}
          textAlign="center"
          fontSize="xl"
          position="absolute"
          top="30"
          left="50"
          padding="0"
        >
          <GoBack />
        </Button>
        <EditProfileForm setIsEditing={setIsEditing} />
      </Flex>
    </Flex>
  );
}
