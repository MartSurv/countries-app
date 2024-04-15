import ArrowDownSrc from "../../../assets/images/arrow-down.svg";
import { Country } from "../../../types";
import styles from "./RegionSelect.module.scss";

type RegionSelectProps = {
  data: Country[];
};

export const RegionSelect: React.FC<RegionSelectProps> = ({ data }) => {
  const uniqueRegions = [
    ...new Set(data.map((country) => country.region)),
  ].sort();

  return (
    <div className={styles.selectWrapper}>
      <select className={styles.select} id="region-select" name="region-select">
        <option value="" selected>
          Filter by Region
        </option>
        {uniqueRegions.map((region) => {
          return <option value={region}>{region}</option>;
        })}
      </select>
      <img className={styles.iconArrowDown} src={ArrowDownSrc} alt="" />
    </div>
  );
};
