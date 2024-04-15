import styles from "./SearchInput.module.scss";
import SearchIconSrc from "../../../assets/images/search.svg";

type SearchInputProps = {
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
}) => {
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
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
