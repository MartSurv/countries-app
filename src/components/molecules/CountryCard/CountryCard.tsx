import classNames from "classnames";

import { CountryDetail } from "@components/atoms/CountryDetail";
import { useAppContext } from "@contexts/AppContext";

import styles from "./CountryCard.module.scss";
import { Country } from "../../../types/country";

type CountryCardProps = {
  data: Country;
};

export const CountryCard: React.FC<CountryCardProps> = ({ data }) => {
  const { darkMode } = useAppContext();
  const cardClassNames = classNames({
    "dark-mode-secondary": darkMode,
    [styles.cardWrapper]: true,
  });

  return (
    <article className={cardClassNames}>
      <figure>
        <img
          className={styles.flag}
          src={data?.flags.svg}
          alt={`${data.name.common} flag`}
        />
        <figcaption></figcaption>
      </figure>
      <section className={styles.countryInfoSection}>
        <h2 className={styles.countryTitle}>{data.name.common}</h2>
        <div className={styles.countryDetails}>
          <CountryDetail data={data?.population} name="Population" />
          <CountryDetail data={data?.region} name="Region" />
          <CountryDetail data={data?.capital} name="Capital" />
        </div>
      </section>
    </article>
  );
};
