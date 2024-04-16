import { Link, useParams } from "react-router-dom";

import arrowLeftSrc from "@assets/images/arrow-left.svg";
import { CountryDetails } from "@components/molecules/CountryDetails";
import useGetCountry from "@hooks/useGetCountry";

import styles from "./Country.module.scss";

export const Country: React.FC = () => {
  const { code } = useParams();
  const { data } = useGetCountry(code);

  return (
    <div className={`${styles.pageWrapper} fade-in`}>
      <Link className={styles.link} to="/">
        <img src={arrowLeftSrc} />
        <span className={styles.linkText}>Back</span>
      </Link>
      <CountryDetails data={data[0]} />
    </div>
  );
};
