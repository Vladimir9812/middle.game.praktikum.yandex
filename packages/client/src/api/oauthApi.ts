import { BaseApi } from './baseApi';

type PostData = {
  code: string;
  redirect_uri: string;
};

const enum OauthApiRoutes {
  GET_OAUTH_SERVICE_ID = 'oauth/yandex/service-id',
  POST_OAUTH_SERVICE = 'oauth/yandex',
}

const baseUserApi = new BaseApi('', true);

export class OauthApi {
  public async getOauthServiceId() {
    return baseUserApi.get({ route: OauthApiRoutes.GET_OAUTH_SERVICE_ID });
  }

  public async postOauthServiceByCode(data: PostData) {
    return baseUserApi.post({ route: OauthApiRoutes.POST_OAUTH_SERVICE, data });
  }
}
