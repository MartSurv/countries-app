import { Title } from "../Title/Title";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Title />
    </header>
  );
};
