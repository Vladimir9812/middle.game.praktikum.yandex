import { Flex } from '@chakra-ui/react';

import { Link } from '@app/components';

import { GoBackIcon } from '../../components/icons/GoBack';
import { EditProfileForm } from '../../components/EditProfileForm/EditProfileForm';

export function EditProfilePage() {
  return (
    <Flex display="flex" align="center" justify="center" direction="column">
      <span style={{ marginTop: '66px', fontSize: '72px' }}>Edit profile</span>
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
        <Link to="/profile" textAlign="center" fontSize="xl">
          <GoBackIcon position="absolute" top="30" left="50" />
        </Link>
        <Flex flexDirection="column" style={{ paddingTop: '15px' }}>
          <EditProfileForm />
        </Flex>
      </Flex>
    </Flex>
  );
}
