export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  const responseJson = await response.json();
  //   console.log("responseJson", responseJson);
  return responseJson;
};
