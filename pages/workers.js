import UserCards from "./components/idcard";
import styles from "../styles/Home.module.css";
import Navbar from "./components/specialized/NavBar/Navbar";
export default function workers() {
  return (
    <div>
      <Navbar />

      <div className={styles.main}>
        <h2>Choose the technician that best fits your job</h2>
        <UserCards />
      </div>
    </div>
  );
}
