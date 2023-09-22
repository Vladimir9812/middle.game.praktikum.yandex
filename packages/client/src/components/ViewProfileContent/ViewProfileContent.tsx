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
} from '@chakra-ui/react';
import { ChangeEvent, useRef } from 'react';

import { EditIcon, ProfileItem } from '@app/components';
import { useAppSelector } from '@app/hooks';

export function ViewProfileContent({
  handleEditClick,
  handleInputChange,
  handleSubmit,
  isOpen,
  onOpen,
  onClose,
}: {
  handleEditClick: () => void;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const { user } = useAppSelector((state) => state.user);
  const finalReference = useRef(null);
  const profileItems = user ? (
    <>
      <ProfileItem name="Score" value={user.id} />
      <ProfileItem name="Name" value={`${user.first_name} ${user.second_name}`} />
      <ProfileItem name="Nickname" value={user.display_name} />
      <ProfileItem
        name="Phone"
        value={user.phone.replace(/(\d)(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5')}
      />
      <ProfileItem name="Email" value={user.email} />
    </>
  ) : null;

  return (
    <Flex display="flex" align="center" justify="center" direction="column">
      <Heading as="h1" fontSize="72px" marginTop="66px" fontWeight="400">
        Player
      </Heading>
      <Flex
        w="935px"
        h="752px"
        borderRadius="15"
        backgroundColor="#CBFDFD"
        justify="flex-start"
        pt={29}
        direction="column"
        align="center"
        position="relative"
      >
        <Button
          onClick={handleEditClick}
          fontSize="xl"
          position="absolute"
          top="30"
          left="50"
          padding="0"
        >
          <EditIcon />
        </Button>
        <Button
          border="none"
          padding="0"
          width="307px"
          height="287px"
          type="button"
          onClick={onOpen}
        >
          <img
            style={{ width: '100%', height: '100%' }}
            alt="avatar"
            src={`https://ya-praktikum.tech/api/v2/resources/${user?.avatar}`}
          />
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
        <Flex flexDirection="column" style={{ paddingTop: '27px' }}>
          {profileItems}
        </Flex>
      </Flex>
    </Flex>
  );
}
