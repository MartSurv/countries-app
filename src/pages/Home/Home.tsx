import { CountryCard } from "../../components/molecules/CountryCard";
import { RegionSelect } from "../../components/atoms/RegionSelect";
import { SearchInput } from "../../components/atoms/SearchInput";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";

import useGetAllCountries from "../../hooks/useGetAllCountries";

export const Home: React.FC = () => {
  const { data } = useGetAllCountries();

  return (
    <main className={styles.homeWrapper}>
      <div className={styles.searchWrapper}>
        <SearchInput />
        <RegionSelect data={data} />
      </div>
      <div className={styles.cardsWrapper}>
        {data.map((country) => {
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
