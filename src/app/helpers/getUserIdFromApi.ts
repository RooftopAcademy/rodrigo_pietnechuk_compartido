import type ApiUserInterface from '../interfaces/ApiUserInterface';
import UserApi from '../services/UserApi';
import makeRequest from '../services/makeRequest';

async function getUserLoginFromApi(username: string, email: string): Promise<ApiUserInterface> {
  const users: ApiUserInterface[] = await makeRequest(
    UserApi.getByUsernameAndEmail(username, email),
  );

  const user: ApiUserInterface = users[0];
  if (!user) {
    throw new Error('Usuario o contraseña incorrectos.');
  }
  return user;
}

export default getUserLoginFromApi;
