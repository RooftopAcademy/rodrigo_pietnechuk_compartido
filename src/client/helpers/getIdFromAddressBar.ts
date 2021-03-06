export default function getIdFromAddressBar(): string {
  const id: string = window.location.hash.split('/').at(-1) || '';

  if (!id) {
    throw new Error('No se especific√≥ un id de producto.');
  }

  return id;
}
