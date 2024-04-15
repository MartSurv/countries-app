import { CountryCard } from "../../components/molecules/CountryCard";
import { RegionSelect } from "../../components/atoms/RegionSelect";
import { SearchInput } from "../../components/atoms/SearchInput";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";

import useGetAllCountries from "../../hooks/useGetAllCountries";

import { useMemo, useState } from "react";
import useGetAllCountriesByRegion from "../../hooks/useGetAllCountriesByRegion";

export const Home: React.FC = () => {
  const { data } = useGetAllCountries();
  const [selectedRegion, setSelectedRegion] = useState("");
  const { data: dataByRegion } = useGetAllCountriesByRegion(selectedRegion);
  const regions = useMemo(
    () => [...new Set(data.map((country) => country.region))].sort(),
    [data]
  );

  const handleRegionSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(e.target.value);
  };

  return (
    <main className={`${styles.homeWrapper} fade-in`}>
      <div className={styles.searchWrapper}>
        <SearchInput />
        <RegionSelect regions={regions} onChange={handleRegionSelect} />
      </div>
      <div className={styles.cardsWrapper}>
        {(selectedRegion ? dataByRegion : data).map((country) => {
          return (
            <Link
              className={styles.cardLink}
              to={`country/${country.cca2}`}
              key={country.cca2}
            >
              <CountryCard data={country} />
            </Link>
          );
        })}
      </div>
    </main>
  );
};
