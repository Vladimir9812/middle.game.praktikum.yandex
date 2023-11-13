import type { RequestWithUser } from 'RequestWithUser';
import type { NextFunction, Response } from 'express';

import { Comment, IComment } from '../models/Comment';

export const createComment = (request: RequestWithUser, response: Response, next: NextFunction) => {
  const { author, text, answer, parentComment = null } = request.body;
  Comment.create({ author, answer, text, parentComment, isDeleted: false })
    .then((comment) => response.send(comment.dataValues))
    .catch((error) => next(error));
};

export const deleteComment = (request: RequestWithUser, response: Response, next: NextFunction) => {
  const { commentId } = request.params;
  Comment.update({ deleted: true }, { where: { id: commentId } })
    .then(() => response.status(200).send({ message: `comment ${commentId} marked as deleted` }))
    .catch((error) => next(error));
};
//
export const getComments = async (
  request: RequestWithUser,
  response: Response,
  _next: NextFunction,
) => {
  const { answerId } = request.params;
  const commentsArray = (await Comment.findAll({
    where: { answer: answerId },
  })) as unknown as IComment[];
  const commentsTree = [];
  for (const comment of commentsArray) {
    if (comment.parentComment) {
      const parentComment = commentsArray.find((_comment) => _comment.id === comment.parentComment);
      if (parentComment) {
        parentComment.childComment = comment;
      }
    } else {
      commentsTree.push(comment);
    }
  }
  response.status(200).send({ data: commentsTree });
};

export const editComment = (request: RequestWithUser, response: Response, next: NextFunction) => {
  const { commentId } = request.params;
  const { text } = request.body;

  Comment.update({ text }, { where: { id: commentId } })
    .then((answer) => response.send({ answer }))
    .catch((error) => next(error));
};
