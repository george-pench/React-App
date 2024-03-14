import styles from "./sectionWrapper.m.scss";

interface SectionWrapperProps {
  children: React.ReactNode;
  heading: string | undefined | null;
  isNarrow?: boolean;
}

export default function SectionWrapper({ children, heading, isNarrow }: SectionWrapperProps) {
  return (
    <div className={styles.sectionWrapper}>
      <h3 className={isNarrow ? styles.sectionHeadingNarrow : styles.sectionHeading}>{heading}</h3>
      <div className={styles.sectionContainer}>{children}</div>
    </div>
  );
}
