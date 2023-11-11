import { DataType, Model } from 'sequelize-typescript';
import type { ModelAttributes } from 'sequelize';

import { sequelize } from '../db/sequelizeInit';

import { Thread } from './Thread';

interface IComment {
  id: number;
  author: number;
  text: string;
  parentComment: number;
  childComment: number;
  thread: number;
  answer: number;
}

const commentModel: ModelAttributes<Model, IComment> = {
  id: {
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  author: {
    type: DataType.INTEGER,
  },
  text: {
    type: DataType.TEXT,
    allowNull: false,
  },
  parentComment: {
    type: DataType.INTEGER,
  },
  childComment: {
    type: DataType.INTEGER,
  },
  answer: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  thread: {
    type: DataType.INTEGER,
    allowNull: false,
    references: {
      model: Thread,
      key: 'id',
    },
  },
};
export const Comment = sequelize.define('Comment', commentModel, {});
