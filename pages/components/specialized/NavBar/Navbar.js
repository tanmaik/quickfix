import styles from "./Navbar.module.css";
import { useUser } from "@auth0/nextjs-auth0";
import Image from "next/image";
import Link from "next/link";

const Navbar = (props) => {
  const { user, error, isLoading } = useUser();
  return (
    <div>
      <p className={styles.logo}>QUICKFIX</p>
      <div className={styles.inline}>
        {" "}
        <Link href="/profile">
          <img src={props.picture} className={styles.image} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
