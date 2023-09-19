import { Flex, Heading } from '@chakra-ui/react';
import { useEffect } from 'react';

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

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  let content;

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
          <img style={{ width: '307px', height: '287px' }} alt="avatar" src={avatar} />
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
