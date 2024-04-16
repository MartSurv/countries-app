import arrowDownSrc from "@assets/images/arrow-down.svg";

import styles from "./RegionSelect.module.scss";

type RegionSelectProps = {
  regions: string[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

export const RegionSelect: React.FC<RegionSelectProps> = ({
  regions,
  onChange,
}) => {
  return (
    <div className={styles.selectWrapper}>
      <select
        className={styles.select}
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
      <img className={styles.iconArrowDown} src={arrowDownSrc} alt="" />
    </div>
  );
};
