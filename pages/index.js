import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import other_styles from "../styles/Overall.module.css";
import Button from "./components/basics/Button";
import Profile from "./components/specialized/Profile/Profile";
// import { useFetchUser } from "../user";
import { UserProvider } from "@auth0/nextjs-auth0";
import { useUser } from "@auth0/nextjs-auth0";
import Router from "next/router";
import Navbar from "./components/specialized/NavBar/Navbar";

const Home = () => {
  const { user, error, isLoading } = useUser();

  if (user) {
    Router.push("/main");
  }

  return (
    <div className={other_styles.background}>
      <Navbar />
      <div className={styles.main}>
        <h1 className={`${other_styles.title} ${other_styles.large}`}>
          You break it, we quickfixit.
        </h1>
        <Button title="Get started" redirect="/api/auth/login" />
        <div className={styles.vertical_spacer} />
        <Profile />
      </div>
    </div>
  );
};

export default Home;
