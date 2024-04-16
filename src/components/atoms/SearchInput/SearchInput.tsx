import classNames from "classnames";

import searchIconSrc from "@assets/images/search.svg";
import { useAppContext } from "@contexts/AppContext";

import styles from "./SearchInput.module.scss";

type SearchInputProps = {
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
}) => {
  const { darkMode } = useAppContext();
  const inputClassNames = classNames({
    "dark-mode-secondary": darkMode,
    [styles.input]: true,
  });

  return (
    <div className={styles.inputWrapper}>
      <img
        className={styles.searchIcon}
        src={searchIconSrc}
        alt="Search Image"
      />
      <input
        className={inputClassNames}
        name="search"
        placeholder="Search for a country..."
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
