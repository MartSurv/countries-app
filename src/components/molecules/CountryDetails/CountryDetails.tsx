import { Country } from "../../../types";
import { BorderCountry } from "../../atoms/BorderCountry";
import { CountryDetail } from "../../atoms/CountryDetail";
import styles from "./CountryDetails.module.scss";

const DetailsColumn: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className={styles.detailsColumn}>{children}</div>;
};

type CountryDetailsProps = {
  data?: Country;
};

export const CountryDetails: React.FC<CountryDetailsProps> = ({ data }) => {
  if (!data) {
    return null;
  }

  const {
    borders,
    capital,
    currencies,
    flags,
    languages,
    name,
    population,
    region,
    subregion,
    tld,
  } = data;
  const nativeName = name.nativeName[Object.keys(name.nativeName)[0]].common;

  return (
    <article className={styles.detailsContainer}>
      <figure>
        <img className={styles.flag} src={flags.svg} />
      </figure>
      <section className={styles.detailsSection}>
        <h2 className={styles.detailsTitle}>{name.common}</h2>
        <div className={styles.detailsColumns}>
          <DetailsColumn>
            <CountryDetail data={nativeName} name="Native Name" />
            <CountryDetail data={population} name="Population" />
            <CountryDetail data={region} name="Region" />
            <CountryDetail data={subregion} name="Sub Region" />
            <CountryDetail data={capital} name="Capital" />
          </DetailsColumn>
          <DetailsColumn>
            <CountryDetail data={tld} name="Top Level Domain" />
            <CountryDetail
              data={Object.keys(currencies).map((currency) => currency)}
              name="Currencies"
            />
            <CountryDetail
              data={Object.keys(languages).map((language) => language)}
              name="Languages"
            />
          </DetailsColumn>
        </div>
        {borders && (
          <div className={styles.borderCountriesContainer}>
            <CountryDetail name="Border Countries" />
            <div className={styles.borderCountries}>
              {borders.map((border) => {
                return <BorderCountry to={border} name={border} />;
              })}
            </div>
          </div>
        )}
      </section>
    </article>
  );
};
