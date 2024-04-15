import { CountryCard } from "../../components/molecules/CountryCard";
import { RegionSelect } from "../../components/atoms/RegionSelect";
import { SearchInput } from "../../components/atoms/SearchInput";
import styles from "./Home.module.scss";
import data from "../../../data/data.json";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <main className={styles.homeWrapper}>
      <div className={styles.searchWrapper}>
        <SearchInput />
        <RegionSelect />
      </div>
      <div className={styles.cardsWrapper}>
        {data.map((country) => {
          return (
            <Link
              className={styles.cardLink}
              to={`country/${country.alpha2Code}`}
            >
              <CountryCard data={country} />
            </Link>
          );
        })}
      </div>
    </main>
  );
};
