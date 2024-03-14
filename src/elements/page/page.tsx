import styles from "./page.m.scss";

interface PageProps {
  children?: React.ReactNode;
  title?: string;
}

export default function Page({ children, title }: PageProps) {
  return (
    <div className={styles.backgroundWrapperImage}>
      <h2 className={styles.visuallyHidden}>{title}</h2>
      {children}
    </div>
  );
}
