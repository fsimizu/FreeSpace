import React, { useState, useEffect, useContext } from "react";
import { signUp, signIn, confirmSignUp, signOut, getCurrentUser } from "aws-amplify/auth";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { UserContext } from "../../context/UserContext";
import './authLogin.css';

export function AuthLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [needsConfirmation, setNeedsConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [messageError, setMessageError] = useState("");

  const { user, attributes } = useContext(UserContext);

  const handleConfirmSignUp = async () => {
    try {
      await confirmSignUp({ username: email, confirmationCode: code });
      setNeedsConfirmation(false);
      setMessage("Account confirmed! Please sign in.");
    } catch (err) {
      setMessage(err.message);
    }
  };

  const handleSignIn = async () => {
    try {
      setLoading(true);
      setHasError(false);
      setMessageError("");
      const signedInUser = await signIn({ username: email, password });

      if (signedInUser.nextStep?.signInStep === 'CONFIRM_SIGN_UP') {
        setMessage("Please verify your account before signing in.");
        setNeedsConfirmation(true);
        return;
      }

    } catch (err) {
      setMessageError(err.message);
      setHasError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();

    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div className="authLogin__container">
      <div className="max-width">

        <h2>Login</h2>
        <div>
          {(!user || !attributes) ? (
            <form className="authLogin__form"
              onSubmit={(e) => {
                e.preventDefault();
                handleSignIn();
              }}>
              <div className="authLogin__input">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className={hasError ? "input-error" : ""}
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
                  className={hasError ? "input-error" : ""}
                />
                {messageError &&
                  <p style={{ fontSize: "0.9rem", color: 'red' }}>
                    {messageError}
                  </p>
                }
              </div>

              {!needsConfirmation ? (
                <>
                  <button
                    type="submit"
                    className="auth__button auth__button_primary"
                    style={{ marginTop: "1rem" }}
                    disabled={loading}
                  >
                    {loading ? ". . ." : "Login"}
                  </button>
                </>
              ) : (
                <>
                  <input
                    type="text"
                    placeholder="6-digit code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                  <button type="button" onClick={handleConfirmSignUp}>Confirm Account</button>
                </>
              )}
              <Link to={`/password-reset`}>
                Forgot password?
              </Link>

              <div>Do not have an account?</div>


              <Link to={`/register`}>
                <button type="button" className="auth__button auth__button_secondary">
                  Sign up
                </button>
              </Link>

            </form>
          ) : (
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
