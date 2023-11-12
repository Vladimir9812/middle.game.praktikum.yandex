import type { Response, NextFunction } from 'express';
import type { RequestWithUser } from 'RequestWithUser';

import { getUserInfo } from '../utils/getUserInfo';
// import { AuthorizationError } from '../errors/AuthorizationError';

export const auth = async (request: RequestWithUser, _response: Response, next: NextFunction) => {
  if (request.user) {
    return;
  }
  const { cookie } = request.headers;
  if (!cookie) {
    next();
    return;
  }
  const user = await getUserInfo(cookie);
  request.user = user;
  next();
};
