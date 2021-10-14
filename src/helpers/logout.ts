import setUsername from './setUsername';

export default function logout(): void {
  window.localStorage.removeItem('userId');
  setUsername('Iniciar Sesión');
}
