import styles from "../styles/Home.module.css";
import Link from "next/link";
import other_styles from "./components/specialized/Profile/Profile.module.css";

export default function conf() {
  return (
    <div className={styles.main}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
      <h2>Appointment Confirmed</h2>
      <p>Your electrician appointment has been scheduled for April 22, 2022.</p>
      <Link href="/">
        <a className={other_styles.pointer}>Go back home</a>
      </Link>
    </div>
  );
}
