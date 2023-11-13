import { Router } from 'express';

import { createComment, deleteComment, editComment, getComments } from '../controllers/comment';

const commentRoutes = Router();
commentRoutes.get('/:answerId', getComments);
commentRoutes.post('/', createComment);
commentRoutes.delete('/:answerId', deleteComment);
commentRoutes.put('/:threadId/edit', editComment);

export { commentRoutes };
