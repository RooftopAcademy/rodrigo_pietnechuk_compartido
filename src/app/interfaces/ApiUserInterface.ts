import type AddressInterface from './AddressInterface';
import type GeoLocationInterface from './GeoLocationInterface';

interface ApiUserInterface {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressInterface;
  geo: GeoLocationInterface;
}

export default ApiUserInterface;
