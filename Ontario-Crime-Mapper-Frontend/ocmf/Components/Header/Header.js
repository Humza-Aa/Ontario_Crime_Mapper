import styles from "./Header.module.css";
import Link from "next/link";
import logout from "../../api/logout";
import { useRouter } from "next/navigation";
import AuthContext from "../../context/AuthProvider";
import { useContext } from "react";


export default function Header(username) {
  // const logoutUser = logout;
  const router = useRouter();
  const { setAuth } = useContext(AuthContext);

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
          {!username.props ? (
            <div className={styles.headerLinks}>
              <Link className={styles.loginBtn} href="/loginPage">
                <h6 className={styles.loginText}>Login</h6>{" "}
              </Link>
              <Link className={styles.loginBtn} href="/registerPage">
                <h6 className={styles.loginText}>Sign Up</h6>{" "}
              </Link>
            </div>
          ) : (
            <div>
              {" "}
              <div>{username.props}</div>
              <button onClick={() => logout(router, setAuth)}>logout</button>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}
