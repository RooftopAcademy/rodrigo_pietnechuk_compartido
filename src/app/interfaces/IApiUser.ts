import type IAddress from './IAddress';
import type IGeo from './IGeo';

interface IApiUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  geo: IGeo;
}

export default IApiUser;
