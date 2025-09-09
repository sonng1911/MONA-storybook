import Link from 'next/link';
import styles from './home.module.scss';

export default function Home() {
  return (
    <main className={styles.wrap}>
      {/* Decor nền */}
      <div className={styles.bg} aria-hidden />

      <section className={styles.center}>
        <h1 className={styles.title}>Design System Starter</h1>
        <p className={styles.desc}>
          Kho component dùng chung cho dự án. Mở Story&nbsp;Gallery để xem từng module.
        </p>

        <Link href="/story-gallery" className={styles.btn}>
          Mở Story&nbsp;Gallery ↗
        </Link>
      </section>

      <footer className={styles.footer}>
        <small>© {new Date().getFullYear()} Your Team. All rights reserved.</small>
      </footer>
    </main>
  );
}
