import { useState, useEffect, useRef } from "react";
import styles from "./RegisterForm.module.css";
import axios from "../../api/axios";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const userTest = /^[a-zA-Z]{5,15}$/;
const emailTest =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordTest = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function RegisterForm() {
  //Focus User on the required element/Error
  const userRef = useRef();
  const errorRef = useRef();

  //Verify Name, Password,
  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [passwordMatch, setpasswordMatch] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const testResult = userTest.test(name);
    setValidName(testResult);
  }, [name]);

  useEffect(() => {
    const testResult = emailTest.test(email);
    setValidEmail(testResult);
  }, [email]);

  useEffect(() => {
    const testResult = passwordTest.test(password);
    setValidPassword(testResult);
    const bothMatching = password == passwordMatch;
    setValidMatch(bothMatching);
  }, [password, passwordMatch]);

  useEffect(() => {
    setErrorMsg("");
  }, [name, password, passwordMatch]);

  useEffect(() => {
    errorRef.current.focus();
  }, [errorMsg]);

  const register_url = "/api/User/register";

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check whether Info passes tests again
    const testuser = userTest.test(name);
    const testpassword = passwordTest.test(password);

    if (!testuser || !testpassword) {
      setErrorMsg("Invalid Entry");
      return;
    }

    try {
      const response = await axios.post(
        register_url,
        JSON.stringify({ name, email, password }),
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setLoggedIn(true);
      setEmail('');
      setPassword('');
      setpasswordMatch('')
    } catch (error) {
      if (!error?.response) {
        setErrorMsg("No Server Response");
      } else if (error.response?.status === 400) {
        setErrorMsg("Email Already Taken");
      } else {
        setErrorMsg("Registration Failed");
      }
    }
  };

  return (
    <>
      <div className={styles.loginContainer}>
        <div className={styles.loginDiv}>
          <div className={styles.registerIntro}>
            <div className={styles.introTitle}>CRIMEPULSE</div>
            <div className={styles.introSlogan}>
              Start finding crimes near you.
            </div>
            <div>
              <p>
                Visualize crime. Map safety. Empower communities. Welcome to
                CrimePulse.
              </p>
            </div>
          </div>
          <div className={styles.formDiv}>
            <h2>Register</h2>
            <section>
              <p
                ref={errorRef}
                className={errorMsg ? styles.errmsg : styles.offScreen}
                aria-live="assertive"
              >
                {errorMsg}
              </p>
            </section>
            <form className={styles.form} onSubmit={handleSubmit}>
              <label htmlFor="name">
                Name:
                <span className={validName ? styles.valid : styles.hide}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span
                  className={validName || !name ? styles.hide : styles.invalid}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              </label>
              <input
                type="text"
                id="name"
                required
                ref={userRef}
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
                value={name}
                onFocus={() => setNameFocus(true)}
                onBlur={() => setNameFocus(false)}
              />
              <p
                id="uidnote"
                className={
                  nameFocus && name && !validName
                    ? styles.instructions
                    : styles.offScreen
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                <br />
                6 to 15 characters.
                <br />
                Must begin with a Capital letter.
                <br />
                Numbers, underscores, hyphens not allowed.
              </p>
              <label htmlFor="email">
                Email:
                <span className={validEmail ? styles.valid : styles.hide}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span
                  className={
                    validEmail || !email ? styles.hide : styles.invalid
                  }
                >
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              </label>
              <input
                type="email"
                required
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="emailNote"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />
              <p
                id="emailNote"
                className={
                  emailFocus && email && !validEmail
                    ? styles.instructions
                    : styles.offScreen
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                <br />
                6 to 15 characters.
                <br />
                Must begin with a Capital letter.
                <br />
                Numbers, underscores, hyphens not allowed.
              </p>
              <label htmlFor="password">
                Password:
                <span className={validPassword ? styles.valid : styles.hide}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span
                  className={
                    validPassword || !password ? styles.hide : styles.invalid
                  }
                >
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              </label>
              <input
                type="password"
                id="password"
                required
                aria-invalid={validPassword ? "false" : "true"}
                aria-describedby="passwordNote"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
              />
              <p
                id="passwordNote"
                className={
                  passwordFocus && !validPassword
                    ? styles.instructions
                    : styles.offScreen
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                <br />
                8 to 24 characters.
                <br />
                Must include uppercase and lowercase letters, a number and a
                special character.
                <br />
                Allowed special characters:{" "}
                <span aria-label="exclamation mark">!</span>{" "}
                <span aria-label="at symbol">@</span>{" "}
                <span aria-label="hashtag">#</span>{" "}
                <span aria-label="dollar sign">$</span>{" "}
                <span aria-label="percent">%</span>
              </p>
              <label htmlFor="confirm_password">
                Confirm Password:
                <span
                  className={
                    validMatch && passwordMatch ? styles.valid : styles.hide
                  }
                >
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span
                  className={
                    validMatch || !passwordMatch ? styles.hide : styles.invalid
                  }
                >
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              </label>
              <input
                type="password"
                id="confirm_password"
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmPass"
                onChange={(e) => setpasswordMatch(e.target.value)}
                value={passwordMatch}
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <p
                id="confirmPass"
                className={`${
                  matchFocus && !validMatch
                    ? styles.instructions
                    : styles.offScreen
                } pwdNoMath`}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                Passwords do not match
              </p>
              <button
                type="submit"
                disabled={
                  !validName || !validEmail || !validPassword || !validMatch
                    ? true
                    : false
                }
                className={styles.subBtn}
              >
                Register
              </button>
            </form>
            <div className={styles.loginPageLinkDiv}>
              Already have an account?
              <a href="/loginPage">Sign In</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
