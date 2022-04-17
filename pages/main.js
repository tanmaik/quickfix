import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import other_styles from "../styles/Overall.module.css";
import Button from "./components/basics/Button";
import { useUser } from "@auth0/nextjs-auth0";
import Profile from "./components/specialized/Profile/Profile";
import Department from "./components/specialized/Departments/Department";
import Navbar from "./components/specialized/NavBar/Navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function main() {
  const router = useRouter();
  const { user, error, isLoading } = useUser();
  console.log(user);
  return (
    <div>
      <Navbar name={user.given_name} picture={user.picture} />
      <div className={styles.main}>
        <h1>Choose what you need</h1>{" "}
        <div className={other_styles.wrapper}>
          <Department
            department="Plumbing"
            image="https://pngimg.com/uploads/sink/sink_PNG55.png"
          />

          <Department
            department="Electrical"
            image="http://cdn.shopify.com/s/files/1/2419/7683/products/acrylic-mountable-lightning-bolt.png?v=1633711239"
          />

          <Department
            department="Carpenting"
            image="https://oldschool.runescape.wiki/images/thumb/Logs_detail.png/1200px-Logs_detail.png?6c104"
          />

          <Department
            department="Gardening"
            image="https://www.material-change.com/wp-content/uploads/2017/04/Shovel-clipart-free-download-clip-art-on-3.png"
          />

          <Department
            department="Maintenance"
            image="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/71263/hammer-clipart-xl.png"
          />

          <Department
            department="Cleaning"
            image="https://www.seekpng.com/png/full/308-3089521_mop-bucket-sprite-004-transparent-mop-clipart.png"
          />
        </div>
      </div>{" "}
      {/* Centered div */}
    </div>
  );
}
