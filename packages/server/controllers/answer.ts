import type { RequestWithUser } from 'RequestWithUser';
import type { NextFunction, Response } from 'express';

import { Answer } from '../models/Answer';

export const createAnswer = (request: RequestWithUser, response: Response, next: NextFunction) => {
  const { author, title, text, thread } = request.body;
  Answer.create({ author, title, text, thread })
    .then((answer) => response.send(answer.dataValues))
    .catch((error) => next(error));
};

export const deleteAnswer = (request: RequestWithUser, response: Response, next: NextFunction) => {
  const { answerId } = request.params;
  Answer.destroy({ where: { id: answerId } })
    .then(() => response.status(200).send({ message: `answer ${answerId} deleted` }))
    .catch((error) => next(error));
};

export const getAnswers = (request: RequestWithUser, response: Response, next: NextFunction) => {
  const { threadId } = request.params;
  const { offset, limit } = request.query;
  Answer.findAll({
    where: { thread: threadId },
    offset: offset ? Number(offset) : undefined,
    limit: limit ? Number(limit) : undefined,
  })
    .then((answers) => response.send({ data: answers }))
    .catch((error) => next(error));
};

export const editAnswer = (request: RequestWithUser, response: Response, next: NextFunction) => {
  const { answerId } = request.params;
  const { title, text } = request.body;

  Answer.update({ title, text }, { where: { id: answerId } })
    .then((answer) => response.send({ answer }))
    .catch((error) => next(error));
};
