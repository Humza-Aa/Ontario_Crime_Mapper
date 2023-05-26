import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className={styles.HeaderContainer}>
        <div className={styles.headerName}>
          <h1 className={styles.cName}>OCM</h1>
        </div>
        <nav className={styles.linksDiv}>
          <div className={styles.headerLinks}>
            <h4>Another Link</h4>
          </div>
          <div className={styles.headerLinks}>
            <h4>Another Link</h4>
          </div>
          <div className={styles.headerLinks}>
            <h4>Another Link</h4>
          </div>
          <div className={styles.headerLinks}>
            <Link className={styles.loginBtn} href="/loginPage">
              {/* <button className={styles.loginBtn} href=""> */}
                <h6 className={styles.loginText}>Login</h6>{" "}
              {/* </button> */}
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
