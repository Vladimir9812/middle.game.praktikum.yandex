import { Box, Button, Center, Flex, Heading, Image, Text } from '@chakra-ui/react';

import { GoBackIcon, Link } from '@app/components';

import Robot from '../../assets/images/robot.png';
import './NotFound.css';
import { errorLinkText } from '../../const/errorLinkText';

export function NotFoundPage() {
  return (
    <Center h="100vh">
      <Flex flexDirection="column" alignItems="center">
        <Flex alignItems="center">
          <Heading as="h1" size="4xl" className="not-found__title" fontWeight={400}>
            ERROR
            <Flex>
              <Text>4</Text>
              <Text className="not-found__code_central">0</Text>
              <Text>4</Text>
            </Flex>
          </Heading>
          <Box boxSize="md" position="relative">
            <Image src={Robot} alt="ERROR ROBOT" align="center" />
          </Box>
        </Flex>
        <Flex mb={20}>
          <Button variant="link" className="service-unavailable__go-back-button">
            <Link
              className="service-unavailable__go-back-link"
              fontWeight="normal"
              fontSize="2xl"
              lineHeight={7}
              color="black"
              to="/"
            >
              <GoBackIcon />
              {errorLinkText}
            </Link>
          </Button>
        </Flex>
      </Flex>
    </Center>
  );
}
