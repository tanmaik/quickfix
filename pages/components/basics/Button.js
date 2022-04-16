import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import other_styles from "./Button.module.css";

export default function Button(props) {
  return (
    <div className={other_styles.outline}>
      <Link href={props.redirect}>
        <h2>{props.title}</h2>
      </Link>
    </div>
  );
}
