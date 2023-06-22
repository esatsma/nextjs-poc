import Link from "next/link";
import styles from "../styles/home.module.css";

export default async function Home() {
  return (
    <div className={styles.home}>
      <h1>Hoi, mijn naam is Lisette</h1>

      <Link href="/blog">Blog</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}
