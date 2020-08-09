import { createContainer } from 'unstated-next';
import { authService } from '../services/auth.service';
import { usersService } from '../services/users.service';

const useApi = () => {
  return {
    authService,
    usersService,
  };
};

export const ApiContainer = createContainer(useApi);
