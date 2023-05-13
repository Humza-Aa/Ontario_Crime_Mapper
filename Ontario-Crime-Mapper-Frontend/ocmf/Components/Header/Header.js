import styles from "./Header.module.css";

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
            <button className={styles.loginBtn} href="">
              <a href="/loginPage">
                <h6 className={styles.loginText}>Login</h6>{" "}
              </a>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
