import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import other_styles from "../styles/Overall.module.css";
import Button from "./components/basics/Button";
import Profile from "./components/specialized/Profile";
import { useUser } from "@auth0/nextjs-auth0";

export default function Home() {
  return (
    <div className={styles.main}>
      <h1 className={`${other_styles.title} ${other_styles.large}`}>
        Welcome to QuickFix
      </h1>
      <Button title="Get started" redirect="/api/auth/login" />
      <div className={styles.vertical_spacer} />
      <Button title="Logout" redirect="/api/auth/logout" />
      <Profile />
    </div>
  );
}
