import { Country } from "../types/country";

export const filterCountries = (
  countries: Country[],
  selectedRegion: string,
  debouncedSearchValue: string
) => {
  if (selectedRegion && !debouncedSearchValue) {
    return countries.filter(({ region }) => region === selectedRegion);
  }
  if (debouncedSearchValue && !selectedRegion) {
    return countries.filter(({ name }) =>
      name.common.toLowerCase().includes(debouncedSearchValue.toLowerCase())
    );
  }
  if (selectedRegion && debouncedSearchValue) {
    return countries.filter(
      ({ region, name }) =>
        region === selectedRegion &&
        name.common.toLowerCase().includes(debouncedSearchValue.toLowerCase())
    );
  }
  return countries;
};
