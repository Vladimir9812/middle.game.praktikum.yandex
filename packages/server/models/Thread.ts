import { DataType, Model } from 'sequelize-typescript';
import type { ModelAttributes } from 'sequelize';

import { sequelize } from '../db/sequelizeInit';

interface IThread {
  id: number;
  author: number;
  title: string;
}

export const threadModel: ModelAttributes<Model, IThread> = {
  id: {
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  author: {
    type: DataType.INTEGER,
  },
  title: {
    type: DataType.TEXT,
    allowNull: false,
  },
};

export const Thread = sequelize.define('Thread', threadModel, {});
