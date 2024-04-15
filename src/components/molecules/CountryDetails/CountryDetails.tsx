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

  return (
    <article className={styles.detailsContainer}>
      <figure>
        <img className={styles.flag} src={data?.flags.svg} />
      </figure>
      <section className={styles.detailsSection}>
        <h2 className={styles.detailsTitle}>{data?.name.common}</h2>
        <div className={styles.detailsColumns}>
          <DetailsColumn>
            {/* <CountryDetail data={data?.name.nativeName} name="Native Name" /> */}
            <CountryDetail data={data?.population} name="Population" />
            <CountryDetail data={data?.region} name="Region" />
            <CountryDetail data={data?.subregion} name="Sub Region" />
            <CountryDetail data={data?.capital} name="Capital" />
          </DetailsColumn>
          <DetailsColumn>
            <CountryDetail data={data?.tld} name="Top Level Domain" />
            <CountryDetail
              data={Object.keys(data?.currencies).map((currency) => currency)}
              name="Currencies"
            />
            <CountryDetail
              data={Object.keys(data?.languages).map((language) => language)}
              name="Languages"
            />
          </DetailsColumn>
        </div>
        {data?.borders && (
          <div className={styles.borderCountriesContainer}>
            <CountryDetail name="Border Countries" />
            <div className={styles.borderCountries}>
              {data.borders.map((border) => {
                return <BorderCountry to={border} name={border} />;
              })}
            </div>
          </div>
        )}
      </section>
    </article>
  );
};
