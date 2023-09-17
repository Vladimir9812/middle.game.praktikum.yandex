import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@fontsource/ubuntu-mono/cyrillic.css';
import '@fontsource/ubuntu-mono/latin.css';

import {
  ErrorPage,
  ForumPage,
  GamePage,
  LeaderboardPage,
  LoginPage,
  MainPage,
  ProfilePage,
  RegisterPage,
} from '@app/pages';

import './App.css';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
