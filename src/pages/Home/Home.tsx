import { RegionSelect } from "../../components/atoms/RegionSelect";
import { SearchInput } from "../../components/atoms/SearchInput";
import styles from "./Home.module.scss";
import useGetAllCountries from "../../hooks/useGetAllCountries";
import { useMemo, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import { CountriesList } from "../../components/molecules/CountriesList";

export const Home: React.FC = () => {
  const { data: allCountries } = useGetAllCountries();
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchValue, debouncedSearchValue, setSearchValue] = useDebounce(300);
  const filteredData = useMemo(
    () =>
      allCountries.filter(
        ({ region, name }) =>
          region === selectedRegion &&
          name.common.toLowerCase().includes(debouncedSearchValue.toLowerCase())
      ),
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
    <main className={`${styles.homeWrapper} fade-in`}>
      <div className={styles.searchWrapper}>
        <SearchInput value={searchValue} onChange={handleSearch} />
        <RegionSelect regions={regions} onChange={handleRegionSelect} />
      </div>
      <CountriesList
        data={
          selectedRegion || debouncedSearchValue ? filteredData : allCountries
        }
      />
    </main>
  );
};
