import { useState, useEffect, useRef, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import styles from "./LoginForm.module.css";
import axios from "../../lib/axios";
import loginImage from "../../public/loginImage.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function LoginForm() {
  const router = useRouter();
  // const {auth, setAuth} = useContext(AuthContext)

  const { setAuth } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const emailRef = useRef();
  const errorRef = useRef();

  const login_url = "/api/User/login";

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMsg("");
  }, [email, password]);

  async function submit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        login_url,
        {
          email: email,
          password: password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
        );
        console.log(response);
      const accessToken = response.data.accessToken;

      
      
      setAuth({ email, password, accessToken });
      router.push(`${window.location.origin}/ProtectedRoutes/HomePage`);
      setLoggedIn(true);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
      if (!error?.response) {
        setErrorMsg("No Server Response");
      } else if (error.response?.status === 400) {
        setErrorMsg(`Email or password incorrect`);
      } else if (error.response?.status === 401) {
        setErrorMsg("Unauthorized");
      } else {
        setErrorMsg("Login Failed");
      }
      errorRef.current.focus();
    }

  }

  return (
    <>
      <div className={styles.loginContainer}>
        <div className={styles.loginDiv}>
          <div className={styles.imageDiv}>
            <Image
              className={styles.loginImage}
              src={loginImage}
              alt="Login Image"
            />
          </div>
          <div className={styles.formDiv}>
            <div className={styles.headerDiv}>
              <div>
                <Link href="/">
                  <div>
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      style={{ color: "#ffffff" }}
                    />
                  </div>
                </Link>
              </div>
              <h2>Login</h2>
            </div>
            <section>
              <p
                ref={errorRef}
                className={errorMsg ? styles.errmsg : styles.offScreen}
                aria-live="assertive"
              >
                {errorMsg}
              </p>
            </section>
            <form className={styles.form} onSubmit={submit}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                ref={emailRef}
                required
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button type="submit">Login In</button>
            </form>
            <div className={styles.loginPageLinkDiv}>
              Need an account?
              <Link href="/registerPage">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
