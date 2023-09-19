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
import React, { useEffect, useRef } from 'react';

import { ProfileItem, Link } from '@app/components';
import { useAppDispatch, useAppSelector } from '@app/hooks';

import { EditIcon } from '../../components/icons/Edit';
import { fetchUser } from '../../store/slices/ActionCreators';

import avatar from './profile.jpg';

// const data = {
//   score: 20_805,
//   name: 'Kirill Kats',
//   nickname: 'cat_of_freedom',
//   phone: '+952 050 200 72',
//   email: 'boss@yandex.su',
// };

export function ProfilePage() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const finalReference = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  let content;

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files![0]; // Получаем первый выбранный файл
    const formData = new FormData();
    formData.append('avatar', selectedFile);
    // dispatch(changeAvatar(formData));
  };

  if (user) {
    const profileItems = Object.entries(user).map(([key, value]) => {
      if (key === 'score') {
        return (
          <ProfileItem
            key={key}
            name={key}
            value={value}
            color="#FE6060" // Передача цвета
          />
        );
      }
      return <ProfileItem key={key} name={key} value={value} />;
    });

    content = (
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
          <Link to="/edit-profile" textAlign="center" fontSize="xl">
            <EditIcon position="absolute" top="30" left="50" />
          </Link>
          <button
            style={{
              width: '307px',
              height: '287px',
              cursor: 'pointer',
              padding: 0,
              border: 'none',
              background: 'none',
            }}
            type="button"
            onClick={onOpen}
          >
            <img style={{ width: '100%', height: '100%' }} alt="avatar" src={avatar} />
          </button>
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
  } else {
    content = <div>Loading...</div>; // Можно добавить сообщение о загрузке
  }

  return content;
}
