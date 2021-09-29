export default async function makeRequest<T>(request: Promise<Response>): Promise<T> {
  const res: Response = await request;

  if (!res.ok) {
    throw new Error(String(res.status));
  }

  return res.json();
}
