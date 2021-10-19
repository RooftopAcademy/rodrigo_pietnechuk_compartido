import type ApiUserInterface from '../interfaces/ApiUserInterface';
import makeRequest from '../services/makeRequest';
import UserApi from '../services/UserApi';
import login from './login';
import logout from './logout';

export default async function setupLoginOnStartup(): Promise<void> {
  const id: string = window.localStorage.getItem('userId') ?? '';

  if (!id) {
    logout();
    return;
  }

  try {
    const user: ApiUserInterface = await makeRequest(UserApi.getById(id));
    login(user);
  } catch {
    logout();
  }
}
