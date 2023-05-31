import { useState, useEffect, useRef, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import styles from "./LoginForm.module.css";
import axios from "../../api/axios";
import loginImage from "../../public/loginImage.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
      setEmail("");
      router.push("http://localhost:3000/ProtectedRoutes/homePage");
      setPassword("");
      setLoggedIn(true);
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
            <h2>Login</h2>
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
              <a href="/registerPage">Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
