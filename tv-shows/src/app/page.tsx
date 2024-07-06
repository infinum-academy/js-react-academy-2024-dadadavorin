"use client";

import styles from "./page.module.css";
import { ShowDetailsContainer } from "@/components/features/shows/ShowDetails";

export default function Home() {
  return (
    <main className={styles.main}>
      <ShowDetailsContainer />
    </main>
  );
}
