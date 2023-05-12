import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.HeaderContainer}>
        <div className={styles.headerName}>
          <h2 className={styles.cName}>OCM</h2>
        </div>
        <div className={styles.linksDiv}>
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
            <h4 className={styles.loginBtn}>Login</h4>
          </div>
        </div>
      </div>
    </>
  );
}
