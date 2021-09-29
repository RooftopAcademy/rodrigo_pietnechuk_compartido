import type IApiUser from '../interfaces/IApiUser';
import makeRequest from '../services/makeRequest';
import UserApi from '../services/UserApi';
import login from './login';
import logout from './logout';

export default async function setupLoginOnStartup(): Promise<void> {
  const id: string | null = window.localStorage.getItem('userId');

  if (!id) {
    logout();
    return;
  }

  try {
    const user: IApiUser = await makeRequest(UserApi.getById(id));
    login(user);
  } catch {
    logout();
  }
}
