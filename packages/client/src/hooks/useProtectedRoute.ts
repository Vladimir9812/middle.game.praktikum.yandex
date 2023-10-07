import { useNavigate, useLocation } from 'react-router-dom';

import { notAuthRoutes, protectedRoutes, Routes } from '../const/routes';

import { useAppSelector } from './redux';

export const useProtectedRoute = () => {
  const { user } = useAppSelector((state) => state.user);
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();
  const isLoginPage = pathname === Routes.LOGIN;
  const isMainPage = pathname === Routes.ROOT;
  const isProtectedRouteLocation = protectedRoutes.includes(pathname as Routes);
  const isNotAuthRouteLocation = notAuthRoutes.includes(pathname as Routes);
  if (user && !isProtectedRouteLocation && !isMainPage) {
    navigate(Routes.ROOT);
  }
  if (!user && !isNotAuthRouteLocation && !isLoginPage) {
    navigate(Routes.LOGIN);
  }
};
