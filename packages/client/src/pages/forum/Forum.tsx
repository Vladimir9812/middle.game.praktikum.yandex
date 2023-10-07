import { Container, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { BACKGROUND_CONST } from '@app/utils';
import { useProtectedRoute } from '@app/hooks';

export function ForumPage() {
  useProtectedRoute();
  return (
    <Container maxW="container.lg" bg="transparent" color="#262626" h="100vh" pt="5vh" pb="5vh">
      <Flex
        bg={BACKGROUND_CONST}
        h="100%"
        className="forum"
        pr={10}
        pl={10}
        pb={5}
        flexDirection="column"
        overflowY="auto"
        borderRadius="8px"
      >
        <Outlet />
      </Flex>
    </Container>
  );
}
