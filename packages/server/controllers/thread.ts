import type { RequestWithUser } from 'RequestWithUser';
import type { NextFunction, Response } from 'express';

import { Thread } from '../models/Thread';

export const createThread = (request: RequestWithUser, response: Response, next: NextFunction) => {
  const { author, title } = request.body;
  Thread.create({ author, title })
    .then((thread) => response.send(thread.dataValues))
    .catch((error) => next(error));
};

export const deleteThread = (request: RequestWithUser, response: Response, next: NextFunction) => {
  const { threadId } = request.params;
  Thread.destroy({ where: { id: threadId } })
    .then(() => response.status(200).send({ message: `thread ${threadId} deleted` }))
    .catch((error) => next(error));
};

export const getThreads = (request: RequestWithUser, response: Response, next: NextFunction) => {
  const { limit, offset } = request.params;
  Thread.findAll({ offset: Number(offset), limit: Number(limit) })
    .then((threads) => response.send({ data: threads }))
    .catch((error) => next(error));
};

export const editThread = (request: RequestWithUser, response: Response, next: NextFunction) => {
  const { threadId } = request.params;
  const { title } = request.body;

  Thread.update({ title }, { where: { id: threadId }, returning: true })
    .then((thread) => response.send({ thread }))
    .catch((error) => next(error));
};
