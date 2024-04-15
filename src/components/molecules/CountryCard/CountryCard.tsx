import styles from "./CountryCard.module.scss";
import { CountryDetail } from "../../atoms/CountryDetail";
import { Country } from "../../../types";

type CountryCardProps = {
  data: Country;
};

export const CountryCard: React.FC<CountryCardProps> = ({ data }) => {
  return (
    <article className={styles.cardWrapper}>
      <figure>
        <img className={styles.flag} src={data?.flags.svg} />
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
