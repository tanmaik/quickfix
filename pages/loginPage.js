import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Button from "./components/basics/Button";

export default function loginPage() {
  function hi() {
    console.log("hi");
  }
  return (
    <div>
      <Button title="Go back home" redirect="/" onClick={hi}></Button>
    </div>
  );
}
