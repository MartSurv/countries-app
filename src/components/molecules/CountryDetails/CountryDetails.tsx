import { Country } from "../../../types";
import { CountryDetail } from "../../atoms/CountryDetail";
import styles from "./CountryDetails.module.scss";

const DetailsColumn: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className={styles.detailsRow}>{children}</div>;
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
          </DetailsColumn>
          <DetailsColumn>
            <CountryDetail
              data={data?.topLevelDomain}
              name="Top Level Domain"
            />
          </DetailsColumn>
        </div>
        {/* <DetailsRow>
          <CountryDetail data={data?.population} name="Population" />
          <CountryDetail
            data={data?.currencies?.map((currency) => currency.name)}
            name="Currencies"
          />
        </DetailsRow>
        <DetailsRow>
          <CountryDetail data={data?.region} name="Region" />
          <CountryDetail
            data={data?.languages.map((language) => language.name)}
            name="Languages"
          />
        </DetailsRow> */}
      </section>
    </article>
  );
};
