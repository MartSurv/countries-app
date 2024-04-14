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
  return (
    <article className={styles.detailsContainer}>
      <figure>
        <img className={styles.flag} src={data?.flag} />
      </figure>
      <section className={styles.detailsSection}>
        <h2 className={styles.detailsTitle}>{data?.name}</h2>
        <div className={styles.detailsColumns}>
          <DetailsColumn>
            <CountryDetail data={data?.nativeName} name="Native Name" />
            <CountryDetail data={data?.population} name="Population" />
            <CountryDetail data={data?.region} name="Region" />
            <CountryDetail data={data?.subregion} name="Sub Region" />
            <CountryDetail data={data?.capital} name="Capital" />
          </DetailsColumn>
          <DetailsColumn>
            <CountryDetail
              data={data?.topLevelDomain}
              name="Top Level Domain"
            />
            <CountryDetail
              data={data?.currencies?.map((currency) => currency.name)}
              name="Currencies"
            />
            <CountryDetail
              data={data?.languages.map((language) => language.name)}
              name="Languages"
            />
          </DetailsColumn>
        </div>
        <div className={styles.borderCountriesContainer}>
          <CountryDetail name="Border Countries" />
          <div className={styles.borderCountries}>
            {data?.borders?.map((border) => {
              return <BorderCountry to={border} name={border} />;
            })}
          </div>
        </div>
      </section>
    </article>
  );
};
