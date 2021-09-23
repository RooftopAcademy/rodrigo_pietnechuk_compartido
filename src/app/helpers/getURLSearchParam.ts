export default function getURLSearchParams(
  query: string,
  errorMessage = "search param not found",
): string {
  const param: string | null = new URLSearchParams(window.location.search).get(query);

  if (param == null) {
    throw new Error(errorMessage);
  }

  return param;
}
