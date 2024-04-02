import styles from "./contact.module.css";
import { TopArrow } from "@/assets/svg";

export function Contact() {
  return (
    <div className={styles.contact}>
      <TopArrow />
      <h2>Subscribe to my blog.</h2>
      <p>I post fresh content every week</p>
      <div className={styles.input_group}>
        <input type="email" placeholder="Email address" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}
