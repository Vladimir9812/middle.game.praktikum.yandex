import { Box, Center, Container, Flex, Heading, Image } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { OauthApi } from '@app/api';
import { Link, LoginForm } from '@app/components';
import { Routes, TEXT } from '@app/const';
import { useAppDispatch } from '@app/hooks';
import { getUser, userSliceActions } from '@app/store';

import logo from '../../assets/images/logo_login.jpg';

export function LoginPage() {
  const dispatch = useAppDispatch();
  const oauthApi = new OauthApi();
  const [searchParameters] = useSearchParams();
  const [loadPage, setLoadPage] = useState(false);
  const reference = useRef(null);
  const { origin } = window.location;

  const oauthLogin = async (error: React.MouseEvent<HTMLElement>) => {
    error.stopPropagation();

    try {
      const res = await oauthApi.getOauthServiceId();
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { service_id } = res;

      dispatch(userSliceActions.setServiceId(service_id));

      alert(service_id);

      // eslint-disable-next-line max-len
      window.location.href = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${service_id}&redirect_uri=${origin}/signin`;
    } catch (error_) {
      console.log(error_);
    }
  };

  const signInRequest = async (code: string) => {
    try {
      const res = await oauthApi.postOauthServiceByCode({
        code,
        redirect_uri: `${origin}/signin`,
      });
      console.log(res, 'RESPONSE');

      const resp = await dispatch(getUser());
      console.log(resp, 'resp');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (reference.current && !loadPage) {
      setLoadPage(true);
    }
  }, [reference]);

  useEffect(() => {
    if (loadPage) {
      const code = searchParameters.get('code');
      console.log(code, 'code');
      signInRequest(String(code));
    }
  }, [loadPage]);

  return (
    <Container pb={6} maxW="1800px" ref={reference}>
      <Center flexDirection="column">
        <Image src={logo} width="5xl" height="xl" minWidth="lg" alt="Game logo" flex-shrink="0" />
        <Heading as="h1" mb="5" size="4xl">
          {TEXT.loginHeading}
        </Heading>
        <Box width="3.5xl" bg="lightBlue" borderRadius={5} pb={2} pt={3}>
          <Flex gap={2.5} direction="column">
            <LoginForm />
            <Link to={Routes.REGISTER} textAlign="center" fontSize="xl">
              {TEXT.registerLink}
            </Link>
            <button type="button" onClick={oauthLogin}>
              Войти через яндекс
            </button>
          </Flex>
        </Box>
      </Center>
    </Container>
  );
}
