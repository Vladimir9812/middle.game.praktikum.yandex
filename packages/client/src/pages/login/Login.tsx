import { Box, Center, Flex, Heading, Image } from '@chakra-ui/react';

import { LoginForm, Link } from '@app/components';

import logo from '../../assets/images/logo_login.jpg';
import { ROUTES } from '../../types/Routes';

const enum LoginText {
  heading = 'Welcome, hero!',
  link = 'Register new player',
}

export function LoginPage() {
  return (
    <Center flexDirection="column" pb={6} maxW="1800px">
      <Image src={logo} width="5xl" height="xl" minWidth="lg" alt="Game logo" flex-shrink="0" />
      <Heading as="h1" mb="5" size="4xl">
        {LoginText.heading}
      </Heading>
      <Box width="3.5xl" bg="lightBlue" borderRadius={5} pb={2} pt={3}>
        <Flex gap={2.5} direction="column">
          <LoginForm />
          <Link to={ROUTES.REGISTER} textAlign="center" fontSize="xl">
            {LoginText.link.toUpperCase()}
          </Link>
        </Flex>
      </Box>
    </Center>
  );
}
