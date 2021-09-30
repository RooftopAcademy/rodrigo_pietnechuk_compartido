import type IApiUser from '../interfaces/IApiUser';
import UserApi from '../services/UserApi';
import makeRequest from '../services/makeRequest';

async function getUserLoginFromApi(username: string, email: string): Promise<IApiUser> {
  const users: IApiUser[] = await makeRequest(UserApi.getByUsernameAndEmail(username, email));
  const user: IApiUser = users[0];
  if (!user) {
    throw new Error('Usuario o contraseña incorrectos.');
  }
  return user;
}

export default getUserLoginFromApi;
