import { Link, useParams } from "react-router-dom";
import { CountryDetails } from "../../components/molecules/CountryDetails";

import styles from "./Country.module.scss";
import useGetCountry from "../../hooks/useGetCountry";

export const Country: React.FC = () => {
  const { code } = useParams();
  const { data } = useGetCountry(code);

  return (
    <div className={`${styles.pageWrapper} fade-in`}>
      <header>
        <Link to="/">Back</Link>
      </header>
      <CountryDetails data={data[0]} />
    </div>
  );
};
