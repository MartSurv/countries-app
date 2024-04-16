import styles from "./ErrorMessage.module.scss";

type ErrorMessageProps = {
  message?: React.ReactNode;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <h2 className={styles.errorText}>{message}</h2>;
};
