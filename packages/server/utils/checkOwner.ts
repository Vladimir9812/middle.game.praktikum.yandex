import type { NextFunction } from 'express';

import { AuthorizationError } from '../errors/AuthorizationError';

export const checkAuthor = (authorId: string | null, userId: string, next: NextFunction) => {
  if (authorId !== userId) {
    next(new AuthorizationError('not authorized'));
  }
};
