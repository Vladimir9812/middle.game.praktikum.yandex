// type Props = {};

import { Flex } from '@chakra-ui/react';

import avatar from './profile.jpg';

export function ProfilePage() {
  return (
    <Flex display="flex" align="center" justify="center" direction="column">
      <span style={{ marginTop: '84px', fontSize: '72px' }} className="ProfilePage_title">
        Player
      </span>
      {/* eslint-disable-next-line max-len */}
      <Flex
        w="935px"
        h="752px"
        borderRadius="15"
        backgroundColor="#CBFDFD"
        justify="flex-start"
        pt={29}
        direction="column"
        align="center"
      >
        {/* eslint-disable-next-line max-len */}
        <img
          style={{ width: '307px', height: '287px', marginBottom: '46px' }}
          className="ProfilePage_avatar"
          alt="avatar"
          src={avatar}
        />

        {/* eslint-disable-next-line max-len */}
        <Flex
          borderBottom="1px dashed"
          w="508px"
          justify="space-between"
          style={{ fontSize: '20px' }}
        >
          <span style={{ fontSize: '28px' }}>Score</span>
          <span style={{ color: '#FE6060' }}>20805</span>
        </Flex>
        {/* eslint-disable-next-line max-len */}
        <Flex
          borderBottom="1px dashed"
          w="508px"
          justify="space-between"
          style={{ fontSize: '20px' }}
        >
          <span style={{ fontSize: '28px' }}>Name</span>
          <span style={{ color: '#FE6060' }}>Kirill Kats</span>
        </Flex>
        {/* eslint-disable-next-line max-len */}
        <Flex
          borderBottom="1px dashed"
          w="508px"
          justify="space-between"
          style={{ fontSize: '20px' }}
        >
          <span style={{ fontSize: '28px' }}>Nickname</span>
          <span style={{ color: '#FE6060' }}>cat_of_freedom</span>
        </Flex>
        {/* eslint-disable-next-line max-len */}
        <Flex
          borderBottom="1px dashed"
          w="508px"
          justify="space-between"
          style={{ fontSize: '20px' }}
        >
          <span style={{ fontSize: '28px' }}>Phone</span>
          <span style={{ color: '#FE6060' }}>+952 050 200 72</span>
        </Flex>
        {/* eslint-disable-next-line max-len */}
        <Flex
          borderBottom="1px dashed"
          w="508px"
          justify="space-between"
          style={{ fontSize: '20px' }}
        >
          <span style={{ fontSize: '28px' }}>Email</span>
          <span style={{ color: '#FE6060' }}>boss@yandex.su</span>
        </Flex>
      </Flex>
    </Flex>
  );
}
