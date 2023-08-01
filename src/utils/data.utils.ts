export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  const responseJson = await response.json();
  return responseJson.results;
};
