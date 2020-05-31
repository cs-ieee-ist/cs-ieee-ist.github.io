import Link from "next/link";
import HeaderSearch from "./headerSearch";
import styles from "./layout.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <Link href="/">
          <a className={styles.headerLogoLink}>
            <img
              className={styles.headerLogo}
              src="/images/logo-cs.png"
              alt="logo"
            ></img>
          </a>
        </Link>
      </div>
      <HeaderSearch/>
      <div className={styles.headerRight}>
        <Link href="/about">
          <a className={styles.headerIcon}>
            <img src="/icons/information.svg" alt="info-icon" />
          </a>
        </Link>
      </div>
    </header>
  );
}
