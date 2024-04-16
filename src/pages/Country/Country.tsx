import classNames from "classnames";
import { Link, useParams } from "react-router-dom";

import arrowLeftSrc from "@assets/images/arrow-left.svg";
import { ErrorMessage } from "@components/atoms/ErrorMessage/ErrorMessage";
import { Loader } from "@components/atoms/Loader/Loader";
import { CountryDetails } from "@components/molecules/CountryDetails";
import { useAppContext } from "@contexts/AppContext";
import useGetCountry from "@hooks/useGetCountry";

import styles from "./Country.module.scss";

export const Country: React.FC = () => {
  const { code } = useParams();
  const { error, data, loading } = useGetCountry(code);
  const { darkMode } = useAppContext();
  const linkClassNames = classNames({
    "dark-mode-secondary": darkMode,
    [styles.link]: true,
  });

  return (
    <div className={`${styles.pageWrapper} fade-in`}>
      <Link className={linkClassNames} to="/">
        <img className="icon" src={arrowLeftSrc} />
        <span className={styles.linkText}>Back</span>
      </Link>
      {!loading && error && (
        <ErrorMessage message="Error: Failed to fetch country data. Try again later." />
      )}
      {loading ? <Loader /> : <CountryDetails data={data[0]} />}
    </div>
  );
};
