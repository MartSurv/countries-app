import classNames from "classnames";

import moonOutlinedSrc from "@assets/images/moon-outlined.svg";
import { useAppContext } from "@contexts/AppContext";

import styles from "./Header.module.scss";

type HeaderProps = {
  onDarkModeClick: () => void;
};

export const Header: React.FC<HeaderProps> = ({ onDarkModeClick }) => {
  const { darkMode } = useAppContext();
  const headerClassNames = classNames({
    "dark-mode-primary": darkMode,
    [styles.header]: true,
  });

  return (
    <header className={headerClassNames}>
      <h1 className={styles.title}>Where in the world?</h1>
      <button
        className={styles.darkModeTextWrapper}
        type="button"
        onClick={onDarkModeClick}
      >
        <img src={moonOutlinedSrc} />
        <h3 className={styles.darkModeText}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </h3>
      </button>
    </header>
  );
};
