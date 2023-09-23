const baseUrl = 'https://ya-praktikum.tech/api/v2';
type FormDataUser = {
  [key: string]: string;
};
export class MyApi {
  // eslint-disable-next-line class-methods-use-this
  private async handleResponse(response: Response) {
    if (response.status !== 200) {
      const errorMessage = `HTTP Error: ${response.status}`;
      throw new Error(errorMessage);
    }
    return response.json();
  }

  public async fetchData() {
    try {
      const response = await fetch(`${baseUrl}/auth/user`, {
        credentials: 'include',
      });
      return await this.handleResponse(response);
    } catch (error) {
      if (error instanceof Error) {
        throw new TypeError(`API Error: ${error.message}`);
      }
      return {};
    }
  }

  public async fetchDataUser(headers: FormDataUser, user: FormDataUser) {
    try {
      const response = await fetch(`${baseUrl}/auth/signin`, {
        method: 'POST',
        headers,
        body: JSON.stringify(user),
        credentials: 'include',
      });
      return await this.handleResponse(response);
    } catch (error) {
      if (error instanceof Error) {
        throw new TypeError(`API Error: ${error.message}`);
      }
      return {};
    }
  }

  public async changeProfile(headers: FormDataUser, userData: FormDataUser) {
    try {
      const response = await fetch(`${baseUrl}/user/profile`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(userData),
        credentials: 'include',
      });
      return await this.handleResponse(response);
    } catch (error) {
      if (error instanceof Error) {
        throw new TypeError(`API Error: ${error.message}`);
      }
      return {};
    }
  }

  public async changePassword(headers: FormDataUser, passwordData: FormDataUser) {
    try {
      const response = await fetch(`${baseUrl}/user/password`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(passwordData),
        credentials: 'include',
      });
      return await this.handleResponse(response);
    } catch (error) {
      if (error instanceof Error) {
        throw new TypeError(`API Error: ${error.message}`);
      }
      return {};
    }
  }

  public async changeAvatar(formData: FormData) {
    try {
      const response = await fetch(`${baseUrl}/user/profile/avatar`, {
        method: 'PUT',
        body: formData,
        credentials: 'include',
      });
      return await this.handleResponse(response);
    } catch (error) {
      if (error instanceof Error) {
        throw new TypeError(`API Error: ${error.message}`);
      }
      return {};
    }
  }
}
