import { Router } from 'express';

import { createThread, deleteThread, editThread, getThreads } from '../controllers/thread';

const threadRoutes = Router();
threadRoutes.get('/:limit/:offset', getThreads);
threadRoutes.post('/', createThread);
threadRoutes.delete('/:threadId', deleteThread);
threadRoutes.put('/:threadId/edit', editThread);

export { threadRoutes };
