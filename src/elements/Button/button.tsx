import styles from "./button.m.scss";

interface Props {
  onClick: () => void;
  content: string;
}

function Button({ onClick, content }: Props) {
  return (
    <button className={styles.button} type="submit" onClick={onClick}>
      {content}
    </button>
  );
}

export default Button;
