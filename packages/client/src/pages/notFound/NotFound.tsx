import { Box, Button, Center, Flex, Heading, Image, Text } from '@chakra-ui/react';

import { Icons, Link } from '@app/components';

import Robot from '../../assets/images/robot.png';

import styles from './NotFound.module.css';

const GO_HOME_TEMPLATE = 'Go home';

export function NotFoundPage() {
  return (
    <Center h="100vh">
      <Flex flexDirection="column" alignItems="center">
        <Flex alignItems="center">
          <Heading as="h1" size="4xl" className={styles.title} fontWeight={400}>
            ERROR
            <Flex>
              <Text>4</Text>
              <Text className={styles.code_central}>0</Text>
              <Text>4</Text>
            </Flex>
          </Heading>
          <Box boxSize="md" position="relative">
            <Image src={Robot} alt="ERROR ROBOT" align="center" />
            <Button variant="link" className="not-found__go-back-button">
              <Link className="not-found__go-back-link" to="/">
                <Icons.GoBackIcon />
                Go back
              </Link>
            </Button>
          </Box>
        </Flex>
        <Flex mb={20}>
          <Button variant="link">
            <Link
              className={styles.link}
              fontWeight="normal"
              fontSize="2xl"
              lineHeight={7}
              color="black"
              to="/"
            >
              <GoBackIcon />
              {GO_HOME_TEMPLATE}
            </Link>
          </Button>
        </Flex>
      </Flex>
    </Center>
  );
}
