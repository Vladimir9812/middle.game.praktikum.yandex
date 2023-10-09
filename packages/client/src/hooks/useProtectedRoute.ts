import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

import { notAuthRoutes, protectedRoutes, Routes } from '../const/routes';

import { useAppSelector } from './redux';

export const useProtectedRoute = () => {
  const { user } = useAppSelector((state) => state.user);
  const auth = !!user;
  const location = useLocation();
  const { pathname } = location;
  const redirect = useMemo(
    () => ({
      shouldRedirect: false,
      to: '',
    }),
    [auth, pathname],
  );
  const isLoginPage = pathname === Routes.LOGIN;
  const isMainPage = pathname === Routes.ROOT;
  const isProtectedRouteLocation = protectedRoutes.includes(pathname as Routes);
  const isNotAuthRouteLocation = notAuthRoutes.includes(pathname as Routes);
  if (auth && !isProtectedRouteLocation && !isMainPage) {
    redirect.to = Routes.ROOT;
    redirect.shouldRedirect = true;
  }
  if (!auth && !isNotAuthRouteLocation && !isLoginPage) {
    redirect.to = Routes.LOGIN;
    redirect.shouldRedirect = true;
  }
  return { redirect };
};
