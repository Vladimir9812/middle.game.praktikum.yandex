import { Router } from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import { body, param } from 'express-validator';

import { createThread, deleteThread, editThread, getThreads } from '../controllers/thread';
import { validate } from '../middlewares/validate';

const threadRoutes = Router();
threadRoutes.get('/', getThreads);
threadRoutes.post(
  '/',
  body(['author', 'title']).escape().notEmpty().trim(),
  validate,
  createThread,
);
threadRoutes.delete(
  '/:threadId',
  param(['threadId']).escape().notEmpty().trim(),
  validate,
  deleteThread,
);
threadRoutes.put(
  '/:threadId/edit',
  param(['threadId']).escape().notEmpty().trim(),
  validate,
  editThread,
);

export { threadRoutes };
