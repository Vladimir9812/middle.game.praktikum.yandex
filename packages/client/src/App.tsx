import './App.css';

import { Center, ChakraProvider, Spinner } from '@chakra-ui/react';
import '@fontsource/ubuntu-mono/cyrillic.css';
import '@fontsource/ubuntu-mono/latin.css';
import { Route, Routes } from 'react-router-dom';
import { startServiceWorker } from '@app/utils/startServiceWorker';
import { useEffect, useRef } from 'react';
import { registerFullScreenEvents } from '@app/utils/fullScreenApi';

import { Routes as RouteNames } from '@app/const';
import { useAppDispatch, useAppSelector } from '@app/hooks';
import { ErrorBoundary, Layout, ProtectedRoute } from '@app/components';
import {
  ForumPage,
  GameOverPage,
  GamePage,
  LeaderboardPage,
  LoginPage,
  MainPage,
  NotFoundPage,
  ProfilePage,
  RegisterPage,
  ServiceUnavailable,
} from '@app/pages';
import { getUser } from '@app/store';

import { theme } from './chakraTheme';
import { ForumList } from './pages/forum/components/ForumList';
import { ForumTopic } from './pages/forum/components/ForumTopic';

export function App() {
  const dispatch = useAppDispatch();
  const initialDataFetch = useRef(false);
  const { isLoading } = useAppSelector((state) => state.user);

  useEffect(() => {
    registerFullScreenEvents();

    if (initialDataFetch.current) {
      return;
    }
    initialDataFetch.current = true;

    dispatch(getUser());

    // в режиме разработки срабатывает дважды из-за React.StrictMode
    startServiceWorker();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <ErrorBoundary isPage componentName="App">
        {isLoading ? (
          <Center h="100vh">
            <Spinner size="xl" />
          </Center>
        ) : (
          <Routes>
            <Route path={RouteNames.ROOT} element={<ProtectedRoute />}>
              <Route path={RouteNames.LOGIN} element={<LoginPage />} />
              <Route path={RouteNames.REGISTER} element={<RegisterPage />} />
              <Route path={RouteNames.GAME} element={<GamePage />} />
              <Route index element={<MainPage />} />
              <Route path={RouteNames.SERVICE_UNAVAILABLE} element={<ServiceUnavailable />} />
              <Route path={RouteNames.ROOT} element={<Layout />}>
                <Route path={RouteNames.PROFILE} element={<ProfilePage />} />
                <Route path={RouteNames.FORUM} element={<ForumPage />}>
                  <Route index element={<ForumList />} />
                  <Route path=":id" element={<ForumTopic />} />
                </Route>
                <Route path={RouteNames.LEADER_BOARD} element={<LeaderboardPage />} />
                <Route path={RouteNames.GAME_OVER} element={<GameOverPage />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        )}
      </ErrorBoundary>
    </ChakraProvider>
  );
}
