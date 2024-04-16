import { useMemo, useState } from "react";

import { ErrorMessage } from "@components/atoms/ErrorMessage";
import { Loader } from "@components/atoms/Loader/Loader";
import { RegionSelect } from "@components/atoms/RegionSelect";
import { SearchInput } from "@components/atoms/SearchInput";
import { CountriesList } from "@components/molecules/CountriesList";
import useDebounce from "@hooks/useDebounce";
import useGetAllCountries from "@hooks/useGetAllCountries";
import { filterCountries } from "@utils/country";

import styles from "./Home.module.scss";

export const Home: React.FC = () => {
  const { error, data: allCountries, loading } = useGetAllCountries();
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchValue, debouncedSearchValue, setSearchValue] = useDebounce(300);
  const filteredData = useMemo(
    () => filterCountries(allCountries, selectedRegion, debouncedSearchValue),
    [allCountries, debouncedSearchValue, selectedRegion]
  );

  const regions = useMemo(
    () => [...new Set(allCountries.map((country) => country.region))].sort(),
    [allCountries]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleRegionSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(e.target.value);
  };

  return (
    <div className={`${styles.homeWrapper} fade-in`}>
      <div className={styles.searchWrapper}>
        <SearchInput value={searchValue} onChange={handleSearch} />
        <RegionSelect regions={regions} onChange={handleRegionSelect} />
      </div>
      {!loading && error && (
        <ErrorMessage message="Error: Failed to fetch countries data. Try again later." />
      )}
      {loading ? <Loader /> : <CountriesList data={filteredData} />}
    </div>
  );
};
