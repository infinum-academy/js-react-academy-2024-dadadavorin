"use client";

import styles from "./page.module.css";
import { ShowDetailsContainer } from "@/components/features/shows/ShowDetails";
import { ReviewListContainer } from "@/components/features/shows/ShowReviewSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <ShowDetailsContainer />
      <ReviewListContainer />
    </main>
  );
}
