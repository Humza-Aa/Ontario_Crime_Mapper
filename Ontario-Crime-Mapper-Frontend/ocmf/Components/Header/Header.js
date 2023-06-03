import styles from "./Header.module.css";
import Link from "next/link";
import AuthContext from "../../context/AuthProvider";
import { useContext } from 'react';

export async function getServerSideProps({ req }) {

}

export default function Header() {

  return (
    <>
      <div className={styles.HeaderContainer}>
        <div className={styles.headerName}>
          <h1 className={styles.cName}>CRIMEPULSE</h1>
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
          {true ? (
            <div className={styles.headerLinks}>
              <Link className={styles.loginBtn} href="/loginPage">
                <h6 className={styles.loginText}>Login</h6>{" "}
              </Link>
              <Link className={styles.loginBtn} href="/registerPage">
                <h6 className={styles.loginText}>Sign Up</h6>{" "}
              </Link>
            </div>
          ) : (
            <div>{auth.email}</div>
          )}
        </nav>
      </div>
    </>
  );
}
