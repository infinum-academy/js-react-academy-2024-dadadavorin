"use client";

import styles from "./page.module.css";
import { ShowReviewSection } from "@/components/features/shows/ShowReviewSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <ShowReviewSection />
    </main>
  );
}
