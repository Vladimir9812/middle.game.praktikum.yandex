import { Flex } from '@chakra-ui/react';

import { ProfileItem, Link } from '@app/components';

import { EditIcon } from '../../components/icons/Edit';

import avatar from './profile.jpg';

const data = {
  score: 20_805,
  name: 'Kirill Kats',
  nickname: 'cat_of_freedom',
  phone: '+952 050 200 72',
  email: 'boss@yandex.su',
};

export function ProfilePage() {
  const profileItems = Object.entries(data).map(([key, value]) => {
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

  return (
    <Flex display="flex" align="center" justify="center" direction="column">
      <span style={{ marginTop: '66px', fontSize: '72px' }}>Player</span>
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
}
