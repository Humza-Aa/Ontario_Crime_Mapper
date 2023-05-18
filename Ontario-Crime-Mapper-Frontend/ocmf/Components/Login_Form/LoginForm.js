import { useState } from "react";
import styles from "./LoginForm.module.css";
import axios from "../../pages/api/axios";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const login_url = "/api/User/login";

  async function submit(e) {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    try {
      // console.log(data);
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
          withCredentials: true
        }
      );
      console.log(response);
      //   const accessToken = response?.data?.
      setEmail("");
      setPassword("");
      setLoggedIn(true);
    } catch (error) {
      console.log(error);
      // if (error.response) {
      //   //response status is an error code
      //   console.log(error.response.status);
      // } else if (error.request) {
      //   //response not received though the request was sent
      //   console.log(error.request);
      // } else {
      //   //an error occurred when setting up the request
      //   console.log(error.message);
      // }
      // // console.log(error);
      // setLoggedIn(false);
    }
  }

  return (
    <>
      {loggedIn ? (
        <div>Login Successful</div>
      ) : (
        <div className={styles.loginContainer}>
          <div className={styles.imageDiv}>Image Div</div>
          <div className={styles.formDiv}>
            <form onSubmit={submit}>
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
      )}
    </>
  );
}
