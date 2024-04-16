import { Outlet } from "react-router-dom";

import { Header } from "@components/atoms/Header";

import styles from "./Layout.module.scss";

export const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.contentWrapper}>
        <Outlet />
      </div>
    </div>
  );
};
