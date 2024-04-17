import classNames from "classnames";

import arrowDownSrc from "@assets/images/arrow-down.svg";
import { useAppContext } from "@contexts/AppContext";

import styles from "./RegionSelect.module.scss";

const iconClassNames = classNames({
  [styles.iconArrowDown]: true,
  icon: true,
});

type RegionSelectProps = {
  regions: string[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

export const RegionSelect: React.FC<RegionSelectProps> = ({
  regions,
  onChange,
}) => {
  const { darkMode } = useAppContext();
  const selectClassNames = classNames({
    "dark-mode-secondary": darkMode,
    [styles.select]: true,
  });

  return (
    <div className={styles.selectWrapper}>
      <select
        className={selectClassNames}
        id="region-select"
        name="region-select"
        onChange={onChange}
      >
        <option value="" selected>
          Filter by Region
        </option>
        {regions.map((region) => {
          return <option value={region}>{region}</option>;
        })}
      </select>
      <img
        className={iconClassNames}
        src={arrowDownSrc}
        alt="arrow down icon"
      />
    </div>
  );
};
