import { Router } from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import { body, param } from 'express-validator';

import { createAnswer, deleteAnswer, editAnswer, getAnswers } from '../controllers/answer';
import { validate } from '../middlewares/validate';

const answerRoutes = Router();
answerRoutes.get(
  '/:threadId',
  param(['threadId']).escape().notEmpty().trim(),
  validate,
  getAnswers,
);
answerRoutes.post(
  '/',
  body(['title', 'text', 'thread']).escape().notEmpty().trim(),
  validate,
  createAnswer,
);
answerRoutes.delete(
  '/:answerId',
  param(['answerId']).escape().notEmpty().trim(),
  validate,
  deleteAnswer,
);
answerRoutes.put(
  '/:threadId/edit',
  param(['answerId']).escape().notEmpty().trim(),
  validate,
  editAnswer,
);

export { answerRoutes };
