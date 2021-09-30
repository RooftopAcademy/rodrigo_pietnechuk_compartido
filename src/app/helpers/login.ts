import type ApiUserInterface from '../interfaces/ApiUserInterface';
import setUsername from './setUsername';

export default function login(user: ApiUserInterface): void {
  window.localStorage.setItem('userId', String(user.id));
  setUsername(`${user.username} | Cerrar Sesión`);
}
