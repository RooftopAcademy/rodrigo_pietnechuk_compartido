import type IApiUser from '../interfaces/IApiUser';
import setUsername from './setUsername';

export default function login(user: IApiUser): void {
  window.localStorage.setItem('userId', String(user.id));
  setUsername(`${user.username} | Cerrar Sesión`);
}
