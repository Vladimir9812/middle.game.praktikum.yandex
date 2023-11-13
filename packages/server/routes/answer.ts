import { Router } from 'express';

import { createAnswer, deleteAnswer, editAnswer, getAnswers } from '../controllers/answer';

const answerRoutes = Router();
answerRoutes.get('/:threadId', getAnswers);
answerRoutes.post('/', createAnswer);
answerRoutes.delete('/:answerId', deleteAnswer);
answerRoutes.put('/:threadId/edit', editAnswer);

export { answerRoutes };