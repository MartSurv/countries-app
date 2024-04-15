import { baseURL } from ".";

export const getAllCountries = async () => {
  const response = await fetch(`${baseURL}/all`);

  return response.json();
};
