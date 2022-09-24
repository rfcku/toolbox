import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  const [value, setValue] = useState("");
  const [convert, setConvert] = useState("");
  const base64Encoder = ({ target }) => {
    console.log("Target Value", target);
    let buff = new Buffer(target.value);
    let base64data = buff.toString("base64");
    console.log('"' + value + '" converted to Base64 is "' + base64data + '"');
    setConvert(base64data);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>toolbox</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ul>
          <li>
            <Link href="tools/base64">Base64 Encoder/Decoder</Link>
          </li>
        </ul>
      </main>

      <footer className={styles.footer}>
        <>toolbox</>
      </footer>
    </div>
  );
}
