import styles from "./SearchInput.module.scss";
import SearchIconSrc from "../../../assets/images/search.svg";

export const SearchInput: React.FC = () => {
  return (
    <div className={styles.inputWrapper}>
      <img
        className={styles.searchIcon}
        src={SearchIconSrc}
        alt="Search Image"
      />
      <input
        className={styles.input}
        name="search"
        placeholder="Search for a country..."
        type="text"
      />
    </div>
  );
};
