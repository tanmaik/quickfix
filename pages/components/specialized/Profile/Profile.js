import React from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Image from "next/image";
import styles from "./Profile.module.css";
import Button from "../../basics/Button";
import Link from "next/link";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div className={styles.center}>
        <img src={user.picture} alt={user.name} />
        <h2>{user.given_name}</h2>
        <p>{user.email}</p>
        <Link href="/">
          <p className={styles.pointer}>Go back home</p>
        </Link>
        <Link href="/api/auth/logout">
          <p className={styles.pointer}>Sign out</p>
        </Link>
      </div>
    )
  );
}
