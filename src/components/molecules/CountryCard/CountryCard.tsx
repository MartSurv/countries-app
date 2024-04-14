import styles from "./CountryCard.module.scss";
import staticData from "../../../../data/data.json";
import { CountryDetail } from "../../atoms/CountryDetail";

type CountryCardProps = {
  data: (typeof staticData)[0];
};

export const CountryCard: React.FC<CountryCardProps> = ({ data }) => {
  return (
    <article className={styles.cardWrapper}>
      <figure>
        <img className={styles.flag} src={data?.flag} />
        <figcaption></figcaption>
      </figure>
      <section className={styles.countryInfoSection}>
        <h2 className={styles.countryTitle}>{data.name}</h2>
        <div className={styles.countryDetails}>
          <CountryDetail data={data?.population} name="Population" />
          <CountryDetail data={data?.region} name="Region" />
          <CountryDetail data={data?.capital} name="Capital" />
        </div>
      </section>
    </article>
  );
};
