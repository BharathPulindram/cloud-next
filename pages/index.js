import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Sidebar from "../Components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Cloud Computing</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="icon"
            href="https://cdn2.vectorstock.com/i/1000x1000/62/11/cloud-computing-logo-design-icon-concept-vector-24016211.jpg"
          />
        </Head>
        <Sidebar />
      </div>
    </>
  );
}
