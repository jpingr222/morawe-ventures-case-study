export function getApiUrl(
  endpoint: `/${string}`,
  searchParams?: { [key: string]: string | number | boolean },
): string {
  const url = `/api${endpoint}`;

  if (searchParams === undefined) return url;

  const paramsPair = Object.entries(searchParams).map((value) => [
    value[0],
    String(value[1]),
  ]);
  const paramsString = new URLSearchParams(paramsPair);

  return `${url}?${paramsString}`;
}
