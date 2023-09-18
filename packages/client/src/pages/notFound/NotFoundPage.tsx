import {
  Box,
  Button,
  Center,
  Link as ChakraLink,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { GoBackIcon } from '@app/components';

import Robot from '../../assets/images/robot.png';
import './NotFoundPage.css';

function CustomLink() {
  return (
    <ChakraLink as={ReactRouterLink} to="/" color="black" className="not-found__go-back-link">
      <GoBackIcon />
      Go back
    </ChakraLink>
  );
}

export function NotFoundPage() {
  return (
    <Center h="100vh">
      <Flex flexDirection="column" alignItems="center">
        <Flex alignItems="center">
          <Heading as="h1" size="4xl" className="not-found__title">
            ERROR
            <Flex>
              <Text>4</Text>
              <Text className="not-found__code_central">0</Text>
              <Text>4</Text>
            </Flex>
          </Heading>
          <Box boxSize="md" position="relative" mb={20}>
            <Image src={Robot} alt="ERROR ROBOT" align="center" />
            <Button variant="link" className="not-found__go-back-button">
              <CustomLink />
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Center>
  );
}
