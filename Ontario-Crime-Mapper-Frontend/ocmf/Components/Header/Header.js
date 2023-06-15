import styles from "./Header.module.css";
import Link from "next/link";
import logout from "../../api/logout";
import { useRouter } from "next/navigation";
import AuthContext from "../../context/AuthProvider";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

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
        <div className={styles.HeaderRightSide} id="HeaderRightSidediv">
          <nav className={styles.linksDiv}>
            <div className={styles.headerLinks}>
              <h4>
                Another Link{" "}
                <div style={{ textDecoration: "none", fontSize: "7px" }}>
                  (Comming Soon)
                </div>
              </h4>
            </div>
            <div className={styles.headerLinks}>
              <h4>
                Report A Crime{" "}
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
              <div className={styles.ProfileBtn}>
                <div className={styles.ProfileBtkn}>
                  {username.props}
                  {/* <FontAwesomeIcon icon={`${}`}/> */}
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    shake
                    size="lg"
                    style={{ color: "#ffffff" }}
                  />
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
          {/* <a href="" class="icon" onclick="myFunction()">&#9776;</a> */}
          <button
            className={styles.icon}
            onClick={(e) => {
              var x = document.getElementById("HeaderRightSidediv");
              if (x.className === "HeaderRightSide") {
                x.className += " responsive";
              } else {
                x.className = "HeaderRightSide";
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
