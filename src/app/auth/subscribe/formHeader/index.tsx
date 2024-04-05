import styles from "./formHeader.module.css";
export default function FormHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className={styles.form_header}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}
