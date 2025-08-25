import { confirmSignUp, signOut, signUp } from "aws-amplify/auth";
import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { UserContext } from "../../context/UserContext";

// next steps
// Add loading spinner to login/register pages
// 2 MFA for every login (or every x days)

export function AuthRegister() {
  const { user, attributes } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [language, setLanguage] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [stage, setStage] = useState("register");

  const handleSignUp = async () => {
    try {
      setLoading(true);
      setMessageError("");
      if (password !== newPassword) {
        setMessageError("Passwords do not match");
        setHasError(true);
        return;
      }

      await signUp({
        username: email,
        password,
        options: {
          userAttributes: {
            email,
            given_name: firstName,
            family_name: lastName,
            'custom:language': language,
          }
        },
      });
      setStage('needsConfirmation')
    } catch (err) {
      setMessageError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmSignUp = async () => {
    try {
      setLoading(true);
      setMessageError("");
      await confirmSignUp({ username: email, confirmationCode: code });
      setStage('success')
    } catch (err) {
      setMessageError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (err) {
      setMessageError(err.message);
    }
  };


  return (
    <div className="authLogin__container">
      <div className="max-width">

        <h2>Register</h2>
        <div>

          {stage === "register" && !user &&(
            <>
              <form className="authLogin__form"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSignUp();
                }}>

                <div className="authLogin__input">
                  <label htmlFor="firstName">First name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Your first name"
                    value={firstName}
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="authLogin__input">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Your last name"
                    value={lastName}
                    required
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="authLogin__input">
                  <label htmlFor="language">Native language</label>
                  <select name="language"
                    required
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}>
                    <option value="" disabled defaultValue hidden>
                      Select your language
                    </option>
                    <option value="filipino">Filipino</option>
                    <option value="french">French</option>
                    <option value="japanese">Japanese</option>
                    <option value="spanish">Spanish</option>
                    <option value="portuguese">Portuguese</option>
                    <option value="urdu">Urdu</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="authLogin__input">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="authLogin__input">
                  <label htmlFor="repeatPassword">Repeat password</label>
                  <input
                    type="password"
                    name="repeatPassword"
                    placeholder="Repeat password"
                    value={newPassword}
                    required
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="authLogin__input">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Your password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {messageError &&
                    <p style={{ fontSize: "0.9rem", color: 'red' }}>
                      {messageError}
                    </p>
                  }
                </div>
                <button
                  type="submit"
                  className="auth__button auth__button_primary"
                  style={{ marginTop: "1rem" }}
                  disabled={loading}
                >
                  {loading ? ". . ." : "Create an account"}
                </button>
                <p
                  style={{ fontSize: '0.8rem' }}
                >
                  By clicking 'Create an account', you agree to the <strong>Terms</strong> and <strong>Privacy policy</strong>.</p>
                <div>Already have an account?</div>

                <Link to={`/login`}>
                  <button type="button" className="auth__button auth__button_secondary">
                    Login
                  </button>
                </Link>
              </form>
            </>
          )}

          {stage === "needsConfirmation" && (
            <>
              <form className="authLogin__form"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleConfirmSignUp();
                }}>
                <p
                  style={{ textAlign: "left" }}>
                  Please enter the verification code sent to your email.</p>
                <input
                  type="number"
                  placeholder="6-digit code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />

                {messageError &&
                  <p style={{ fontSize: "0.9rem", color: 'red', textAlign: 'left' }}>
                    {messageError}
                  </p>
                }
                <button
                  type="submit"
                  className="auth__button auth__button_primary"
                  style={{ marginTop: "1rem" }}
                  disabled={loading}
                >
                  {loading ? ". . ." : "Confirm Account"}
                </button>

              </form>
            </>
          )}
          {stage === "success" && (
            <>
              <p
                style={{ textAlign: "left" }}>
                Your email has been validated successfully. You can now login.</p>
              <Link to={`/login`}>
                <button type="button" className="auth__button auth__button_primary">
                  Login
                </button>
              </Link>
            </>
          )}
          
          {(stage === "loggedIn" || (user&&attributes) ) && (
            <>
              <div>
                <p>You are signed in with your user {attributes.email}</p>
                <button
                  onClick={handleSignOut}
                  type="button"
                  className="auth__button auth__button_secondary">
                  Sign out
                </button>
                {messageError &&
                  <p style={{ fontSize: "0.9rem", color: 'red', textAlign: 'left' }}>
                    {messageError}
                  </p>
                }
              </div>
            </>
          )}
        </div>

        <div className="authLogin__copyright">
          <hr style={{ marginTop: "2rem" }} />
          <p>Copyright © 2025<br />FreeSpace Learning</p>
        </div>

      </div>
    </div>
  );
}
