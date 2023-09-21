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
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';

import { EditIcon, GoBack, ProfileItem } from '@app/components';
import { useAppDispatch, useAppSelector } from '@app/hooks';

import { fetchUser } from '../../store/slices/ActionCreators';
import { EditProfileForm } from '../../components/EditProfileForm/EditProfileForm';

import avatar from './profile.jpg';

export function ProfilePage() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const finalReference = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const handleEditClick = () => {
    setIsEditing(true); // Переключаем в режим редактирования
  };

  const handleSaveClick = () => {
    setIsEditing(false); // Выходим из режима редактирования
    // TODO: сохранить изменения на сервере
  };

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFile = event.target.files[0];
      const formData = new FormData();
      formData.append('avatar', selectedFile);
      // TODO: для запроса смены аватара
      // dispatch(changeAvatar(formData));
    }
  };

  const profileItems = user
    ? Object.entries(user).map(([key, value]) => (
        <ProfileItem
          key={key}
          name={key}
          value={value}
          color={key === 'score' ? '#FE6060' : undefined}
        />
      ))
    : null;

  const editProfileContent = (
    <Flex display="flex" align="center" justify="center" direction="column">
      <Heading as="h1" fontSize="72px" marginTop="66px" fontWeight="400">
        Edit profile
      </Heading>
      <Flex
        w="935px"
        h="752px"
        borderRadius="15"
        backgroundColor="lightBlue"
        justify="flex-start"
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
        <Flex flexDirection="column" style={{ paddingTop: '15px' }}>
          <EditProfileForm />
        </Flex>
      </Flex>
    </Flex>
  );

  const viewProfileContent = (
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
          <img style={{ width: '100%', height: '100%' }} alt="avatar" src={avatar} />
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
              <Button variant="ghost" onClick={onClose}>
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

  return user ? isEditing ? editProfileContent : viewProfileContent : <div>Loading...</div>;
}
