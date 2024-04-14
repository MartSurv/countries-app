import { useParams } from "react-router-dom";
import { CountryDetails } from "../../components/molecules/CountryDetails/CountryDetails";
import data from "../../../data/data.json";
import styles from "./Country.module.scss";

export const Country: React.FC = () => {
  const { code } = useParams();

  return (
    <div className={styles.pageWrapper}>
      <header>
        <button>Back</button>
      </header>
      <CountryDetails
        data={data.find((country) => country.alpha2Code === code)}
      />
    </div>
  );
};
