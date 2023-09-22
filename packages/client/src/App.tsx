import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/ubuntu-mono/cyrillic.css';
import '@fontsource/ubuntu-mono/latin.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ErrorBoundary } from '@app/components';
import {
  ForumPage,
  GamePage,
  LeaderboardPage,
  LoginPage,
  MainPage,
  NotFoundPage,
  ProfilePage,
  RegisterPage,
  ServiceUnavailable,
} from '@app/pages';

import './App.css';
import { theme } from './chakraTheme';
import { ForumList } from './pages/forum/components/ForumList';
import { ForumTopic } from './pages/forum/components/ForumTopic';

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <ErrorBoundary isPage componentName="App">
          <Routes>
            <Route index path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/forum" element={<ForumPage />}>
              <Route index path="" element={<ForumList />} />
              <Route path=":id" element={<ForumTopic />} />
            </Route>
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/service-unavailable" element={<ServiceUnavailable />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </ChakraProvider>
  );
}
