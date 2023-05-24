import { useState } from "react";
import styles from "./LoginForm.module.css";
import axios from "../../pages/api/axios";
import loginImage from "../../public/loginImage.jpg"
import Image from "next/image";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const login_url = "/api/User/login";
  const logout_url = "/api/logout";

  async function submit(e) {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        login_url,
        {
          params: {
            email: email,
            password: password,
          },
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response);
      setEmail("");
      setPassword("");
      setLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  }

  const logout = async (e) => {
    try {
      const response = await axios.get(
        logout_url,
        {},
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
          credentials: "include",
          // path: COOKIE_PATH,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loggedIn ? (
        <div>
          Login Successful:{" "}
          <button
            onClick={(e) => {
              logout(e);
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className={styles.loginContainer}>
          <div className={styles.loginDiv}>
            <div className={styles.imageDiv}>
              <Image className={styles.loginImage} src={loginImage} alt="Login Image" />
            </div>
            <div className={styles.formDiv}>
              <h2>Login</h2>
              <form className={styles.form} onSubmit={submit}>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  required
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <button type="submit">Login In</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
