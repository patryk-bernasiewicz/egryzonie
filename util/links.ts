export const createUrlWithSearchParams = (
  path: string,
  params: URLSearchParams,
) => {
  const basePath = path.split('?')[0];
  return `${basePath}${params.toString() ? `?${params.toString()}` : ''}`;
};
