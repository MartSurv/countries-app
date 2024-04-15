import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Where in the world?</h1>
    </header>
  );
};
