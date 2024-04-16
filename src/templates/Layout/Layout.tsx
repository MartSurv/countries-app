import classNames from "classnames";
import { Outlet } from "react-router-dom";

import { Header } from "@components/atoms/Header";
import { useAppContext } from "@contexts/AppContext";

import styles from "./Layout.module.scss";

export const Layout: React.FC = () => {
  const { darkMode, setDarkMode } = useAppContext();
  const pageClassNames = classNames({
    "dark-mode-primary": darkMode,
    [styles.page]: true,
  });

  return (
    <div className={pageClassNames}>
      <Header
        onDarkModeClick={() => {
          setDarkMode(!darkMode);
        }}
      />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};
