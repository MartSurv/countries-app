import { Link } from "react-router-dom";
import styles from "./BorderCountry.module.scss";

type BorderCountryProps = {
  to?: string;
  name: string;
};

export const BorderCountry: React.FC<BorderCountryProps> = ({ name, to }) => {
  return (
    <Link className={styles.link} to={`/country/${to}`} replace>
      {name}
    </Link>
  );
};
