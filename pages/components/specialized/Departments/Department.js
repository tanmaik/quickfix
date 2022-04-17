import Image from "next/image";
import styles from "./Department.module.css";
import Link from "next/link";

const Department = (props) => {
  return (
    <div className={styles.main}>
      <Link href="/workers">
        <div className={styles.vertically_center}>
          {" "}
          <Image
            className={styles.image}
            src={props.image}
            width={50}
            height={50}
          />
          <h1 className={styles.text}>{props.department}</h1>
        </div>
      </Link>
    </div>
  );
};

export default Department;
