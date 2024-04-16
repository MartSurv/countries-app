import classNames from "classnames";
import { Link } from "react-router-dom";

import { useAppContext } from "@contexts/AppContext";

import styles from "./BorderCountry.module.scss";

type BorderCountryProps = {
  to?: string;
  name: string;
};

export const BorderCountry: React.FC<BorderCountryProps> = ({ name, to }) => {
  const { darkMode } = useAppContext();
  const linkClassNames = classNames({
    "dark-mode-secondary": darkMode,
    [styles.link]: true,
  });

  return (
    <Link className={linkClassNames} to={`/country/${to}`} replace>
      {name}
    </Link>
  );
};
