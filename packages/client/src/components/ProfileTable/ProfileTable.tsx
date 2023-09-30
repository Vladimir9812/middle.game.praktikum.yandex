import {
  Button,
  Flex,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Image,
} from '@chakra-ui/react';
import { ChangeEvent, useRef } from 'react';

import { Icons, ProfileItem } from '@app/components';
import { useAppSelector } from '@app/hooks';
import { Field, User } from '@app/types';
import { ProfileFields, staticBaseUrl, FieldName } from '@app/const';

type Properties = {
  handleEditClick: () => void;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  fields: ProfileFields;
};
export function ProfileTable({
  handleEditClick,
  handleInputChange,
  handleSubmit,
  isOpen,
  onOpen,
  onClose,
  fields,
}: Properties) {
  const { user } = useAppSelector((state) => state.user);
  const finalReference = useRef(null);
  const createItem = (field: Field) => {
    if (field.name === FieldName.FULL_NAME) {
      return (
        <ProfileItem
          key="name"
          name={field?.label ?? ''}
          value={`${user?.first_name || ''} ${user?.second_name || ''}`}
        />
      );
    }
    if (field.name === FieldName.PHONE) {
      return (
        <ProfileItem
          key={field.name}
          name={field?.label ?? ''}
          value={user?.phone.replace(/(\d)(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5') || ''}
        />
      );
    }

    // TODO Add logic for game score in profile
    if (field.name === FieldName.SCORE) {
      return <ProfileItem key={field.name} name={field?.label ?? ''} value="1984" />;
    }

    return (
      <ProfileItem
        key={field.name}
        name={field?.label ?? ''}
        value={user ? user[field.name as keyof User] : ''}
      />
    );
  };

  return (
    <Flex display="flex" align="center" justify="center" direction="column" height="100vh">
      <Heading as="h1" fontSize="7xl" mt="16" fontWeight="400">
        Player
      </Heading>
      <Flex
        maxW="4xl"
        maxH="3xl"
        width="100vw"
        height="100vh"
        borderRadius="15"
        backgroundColor="lightBlue"
        justify="flex-start"
        pt={29}
        direction="column"
        align="center"
        position="relative"
        mb={24}
      >
        <Button
          onClick={handleEditClick}
          fontSize="xl"
          position="absolute"
          top="30"
          left="50"
          padding="0"
        >
          <Icons.EditIcon />
        </Button>
        <Button
          border="none"
          padding="0"
          maxW="19rem"
          maxH="18rem"
          w="100%"
          h="100%"
          type="button"
          onClick={onOpen}
        >
          <Image w="100%" h="100%" alt="avatar" src={`${staticBaseUrl}/${user?.avatar}`} />
        </Button>
        <Modal finalFocusRef={finalReference} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input type="file" name="picture" onChange={handleInputChange} />
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={handleSubmit}>
                Добавить
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Flex flexDirection="column" pt="1.6rem">
          {fields.map((element) => createItem(element))}
        </Flex>
      </Flex>
    </Flex>
  );
}
