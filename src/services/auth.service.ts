import { AxiosResponse } from 'axios';
import { httpClient } from './httpClient';
import { SignUp } from '../entities/sign-up.entity';
import { User } from '../entities/user.entity';

const ENDPOINT = 'auth/';

export const authService = {
  login: async (
    email: string,
    password: string,
  ): Promise<AxiosResponse<{ access_token: string; expires_in: string }>> => {
    const res = await httpClient.post<{ access_token: string; expires_in: string }>(
      ENDPOINT + 'login',
      { email, password },
    );
    localStorage.setItem('token', res.data.access_token);
    return res;
  },

  logout: (): void => {
    localStorage.removeItem('token');
  },

  signUp: async (
    data: SignUp,
  ): Promise<AxiosResponse<{ expires_in: string; access_token: string }>> => {
    const res = await httpClient.post(ENDPOINT + 'signup', data);
    localStorage.setItem('token', res.data.access_token);
    return res;
  },

  getMe: async (): Promise<AxiosResponse<User>> => {
    return httpClient.get(ENDPOINT + 'me');
  },
};
