import { baseURL } from ".";

export const getCountry = async (code?: string) => {
  const response = await fetch(`${baseURL}/alpha/${code}`);

  return response.json();
};
