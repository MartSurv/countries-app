import { Link, useParams } from "react-router-dom";
import { CountryDetails } from "../../components/molecules/CountryDetails";
import data from "../../../data/data.json";
import styles from "./Country.module.scss";

const findCountry = (data, countryCode?: string) => {
  if (countryCode?.length === 2) {
    return data.find((country) => country.alpha2Code === countryCode);
  }
  if (countryCode?.length === 3) {
    return data.find((country) => country.alpha3Code === countryCode);
  }
  return undefined;
};

export const Country: React.FC = () => {
  const { code } = useParams();

  return (
    <div className={styles.pageWrapper}>
      <header>
        <Link to="/">Back</Link>
      </header>
      <CountryDetails data={findCountry(data, code)} />
    </div>
  );
};
