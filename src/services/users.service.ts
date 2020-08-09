import { httpClient } from './httpClient';
import { AxiosResponse } from 'axios';

const ENDPOINT = 'users/';

export const usersService = {
  getAll: (): Promise<AxiosResponse> => {
    return httpClient.get(ENDPOINT);
  },
};
