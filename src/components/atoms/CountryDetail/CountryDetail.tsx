import styles from "./CountryDetail.module.scss";

type CountryDetailProps = {
  name: string;
  data?: string | number | string[] | number[];
};

export const CountryDetail: React.FC<CountryDetailProps> = ({ data, name }) => {
  if (Array.isArray(data)) {
    return (
      <p className={styles.countryDetail}>
        <strong>{name}:</strong> {data.join(",")}
      </p>
    );
  }

  return (
    <p className={styles.countryDetail}>
      <strong>{name}:</strong> {data}
    </p>
  );
};
