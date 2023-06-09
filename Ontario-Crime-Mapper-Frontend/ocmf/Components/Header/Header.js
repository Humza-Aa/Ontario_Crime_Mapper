import styles from "./Header.module.css";
import Link from "next/link";
import logout from "../../lib/logout";
import { useRouter } from "next/navigation";
import AuthContext from "../../context/AuthProvider";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Header(username) {
  // const logoutUser = logout;
  const router = useRouter();
  const { setAuth } = useContext(AuthContext);
  const [responsive, setResponsive] = useState(false);

  return (
    <>
      <div className={styles.HeaderContainer}>
        <div className={styles.headerName}>
          <h1 className={styles.cName}>CRIMEVUE</h1>
        </div>
        <div
          className={
            responsive
              ? `${styles.HeaderRightSide} ${styles.responsive}`
              : styles.HeaderRightSide
          }
          id="HeaderRightSidediv"
        >
          <nav className={styles.linksDiv}>
            <div className={styles.headerLinks}>
              <h4>
                Report a Crime{" "}
                <div style={{ textDecoration: "none", fontSize: "7px" }}>
                  (Comming Soon)
                </div>
              </h4>
            </div>
            <div className={styles.headerLinks}>
              <h4>
                Community{" "}
                <div style={{ textDecoration: "none", fontSize: "7px" }}>
                  (Comming Soon)
                </div>
              </h4>
            </div>
            <div className={styles.headerLinks}>
              <h4>
                About Us{" "}
                <div style={{ textDecoration: "none", fontSize: "7px" }}>
                  (Comming Soon)
                </div>
              </h4>
            </div>
            {!username.props ? (
              <div className={styles.headerButtons}>
                <Link className={styles.loginBtn} href="/loginPage">
                  <h6 className={styles.loginText}>Login</h6>{" "}
                </Link>
                <Link className={styles.loginBtn} href="/registerPage">
                  <h6 className={styles.loginText}>Sign Up</h6>{" "}
                </Link>
              </div>
            ) : (
              <div className={styles.ProfileBtn}>
                <div className={styles.ProfileBtkn}>
                  {username.props}
                  <span
                    style={
                      responsive ? { display: "none" } : { display: "flex" }
                    }
                  >
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      shake
                      size="lg"
                      style={{ color: "#ffffff" }}
                    />
                  </span>
                </div>
                <div className={styles.profileSubNav}>
                  <button
                    className={styles.logoutBtn}
                    onClick={() => logout(router, setAuth)}
                  >
                    Profile
                  </button>
                  <button
                    className={styles.logoutBtn}
                    onClick={() => logout(router, setAuth)}
                  >
                    logout
                  </button>
                </div>
              </div>
            )}
          </nav>
          <button
            className={styles.icon}
            onClick={() => {
              if (responsive == true) {
                setResponsive(false);
              } else {
                setResponsive(true);
              }
            }}
          >
            &#9776;
          </button>
        </div>
      </div>
    </>
  );
}
