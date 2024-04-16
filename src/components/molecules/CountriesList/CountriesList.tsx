import { Link } from "react-router-dom";

import styles from "./CountriesList.module.scss";
import { Country } from "../../../types/country";
import { CountryCard } from "../CountryCard";

type CountriesListProps = {
  data: Country[];
};

export const CountriesList: React.FC<CountriesListProps> = ({ data }) => {
  return (
    <div className={styles.list}>
      {data.map((country) => {
        return (
          <Link
            className={styles.link}
            to={`country/${country.cca2}`}
            key={country.cca2}
          >
            <CountryCard data={country} />
          </Link>
        );
      })}
    </div>
  );
};
