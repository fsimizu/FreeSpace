import { confirmResetPassword, resetPassword } from "aws-amplify/auth";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

export function AuthReset() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [stage, setStage] = useState("confirmReset");
  const [newPassword, setNewPassword] = useState("");
  const [hasError, setHasError] = useState(false);
  const [messageError, setMessageError] = useState("");

  const handleForgotPassword = async () => {
    try {
      await resetPassword({ username: email });
      setStage("confirmCode");
      setMessage("A reset code has been sent to your email.");
    } catch (err) {
      setMessage(err.message);
    }
  };

  const handleForgotPasswordSubmit = async () => {
    try {
      setLoading(true);
      setHasError(false);
      setMessageError("");

      if (password !== newPassword) {
        setMessageError("Passwords do not match");
        setHasError(true);
        return;
      }

      await confirmResetPassword({ username: email, confirmationCode: code, newPassword });

      setStage("success");
      setMessage("Password reset successful. You can now sign in.");
    } catch (err) {
      setMessageError(err.message);
      setHasError(true);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="authLogin__container">
      <div className="max-width">

        <h2>Forgot password</h2>
        <div>

          {stage === "confirmReset" && (
            <form className="authLogin__form"
              onSubmit={(e) => {
                e.preventDefault();
                handleForgotPassword();
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
                />
                {message && <p>{message}</p>}
              </div>
              <p
                style={{ textAlign: "left" }}>
                We’ll send a verification code to this email if it matches an existing account.
              </p>

              <button
                type="submit"
                className="auth__button auth__button_primary"
                disabled={loading}
              >
                {loading ? ". . ." : "Next"}
              </button>

            </form>

          )}

          {stage === "confirmCode" && (
            <form className="authLogin__form"
              onSubmit={(e) => {
                e.preventDefault();
                handleForgotPasswordSubmit();
              }}>

              <div className="authLogin__input">
                <label htmlFor="code">Validation code</label>
                <input
                  type="number"
                  name="code"
                  placeholder="000000"
                  value={code}
                  required
                  onChange={(g) => setCode(g.target.value)}
                  className={hasError ? "input-error" : ""}
                />
              </div>

              <div className="authLogin__input">
                <label htmlFor="password">New password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className={hasError ? "input-error" : ""}
                />
              </div>
              <div className="authLogin__input">
                <label htmlFor="password">Repeat new password</label>
                <input
                  type="password"
                  name="repeatPassword"
                  placeholder="Your password"
                  value={newPassword}
                  required
                  onChange={(f) => setNewPassword(f.target.value)}
                  className={hasError ? "input-error" : ""}
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
                disabled={loading}
                style={{ marginTop: '1rem' }}
              >
                {loading ? ". . ." : "Reset password"}
              </button>

            </form>
          )}

          {stage === "success" && (
            <div>Your password has been changed</div>
          )}

          <Link to={`/login`}>
            <button type="button" className="auth__button auth__button_secondary" style={{ marginTop: '1rem' }}>
              Back
            </button>
          </Link>
        </div>


        <div className="authLogin__copyright">
          <hr style={{ marginTop: "2rem" }} />
          <p>Copyright © 2025<br />FreeSpace Learning</p>
        </div>

      </div>
    </div>
  );
}
