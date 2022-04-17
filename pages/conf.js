import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "./components/Button.js";
import Calendar from "./components/calendar";
import UserCards from "./components/idcard";
import Test from "./components/test";
import { useEffect } from "react";

export default function Home() {
  return (
    <div>
      <UserCards job="test" />
    </div>
  );
}