import { Router } from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import { body, param } from 'express-validator';

import { createComment, deleteComment, editComment, getComments } from '../controllers/comment';
import { validate } from '../middlewares/validate';

const commentRoutes = Router();
commentRoutes.get(
  '/:answerId',
  param(['answerId']).escape().notEmpty().trim(),
  validate,
  getComments,
);
commentRoutes.post(
  '/',
  body(['text', 'answer', 'parentComment']).escape().notEmpty().trim(),
  validate,
  createComment,
);
commentRoutes.delete(
  '/:commentId',
  param(['commentId']).escape().notEmpty().trim(),
  validate,
  deleteComment,
);
commentRoutes.put(
  '/:threadId/edit',
  param(['threadId']).escape().notEmpty().trim(),
  validate,
  editComment,
);

export { commentRoutes };
