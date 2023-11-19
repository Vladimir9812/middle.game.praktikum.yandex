import { localServer } from '../const/api';
import { AnyObject } from '../types/AnyObject';

import { BaseApi, Url } from './baseApi';

const enum ForumApiRoutes {
  BASE = 'api/forum',
  NEWTREAD = 'thread',
  ALLTREAD = 'thread/',
  NEWANSWER = 'answer',
}

const baseForumApi = new BaseApi({
  url: ForumApiRoutes.BASE,
  apiBaseUrl: localServer,
  withCredentials: true,
});

export class ForumApi {
  public async createNewThread(title: AnyObject) {
    return baseForumApi.post({ route: ForumApiRoutes.NEWTREAD, data: title });
  }

  public async getAllThread() {
    return baseForumApi.get({ route: ForumApiRoutes.ALLTREAD });
  }

  public async deleteTread(threadId: Url) {
    return baseForumApi.delete({ route: threadId });
  }

  public async getAllAnswer(threadId: Url) {
    return baseForumApi.get({ route: threadId });
  }

  public async createNewAnswer(body: AnyObject) {
    return baseForumApi.post({ route: ForumApiRoutes.NEWANSWER, data: body });
  }
}
