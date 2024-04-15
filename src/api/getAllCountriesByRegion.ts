import { baseURL } from ".";

export const getAllCountriesByRegion = async (region: string) => {
  const response = await fetch(`${baseURL}/region/${region}`);

  return response.json();
};
