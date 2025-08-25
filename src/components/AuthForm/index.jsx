import React, { useState, useEffect } from "react";
import { signUp, signIn, confirmSignUp, signOut, getCurrentUser } from "aws-amplify/auth";

export function AuthForm() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [needsConfirmation, setNeedsConfirmation] = useState(false);
  const [message, setMessage] = useState("");


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch {
        setUser(null); // not signed in
      }
    };
    fetchUser();
  }, []);

  const handleSignUp = async () => {
    try {
      await signUp({
        username: email,
        password,
        options: { userAttributes: { email } },
      });
      setNeedsConfirmation(true);
      setMessage("Check your email for the confirmation code.");
    } catch (err) {
      setMessage(err.message);
    }
  };

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
      const signedInUser = await signIn({ username: email, password });

      if (signedInUser.nextStep?.signInStep === 'CONFIRM_SIGN_UP') {
        setMessage("Please verify your account before signing in.");
        setNeedsConfirmation(true);
        return;
      }

      setUser(signedInUser);
      setMessage("Signed in successfully!");
    } catch (err) {
      setMessage(err.message);
    }
  };


  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
      setMessage("Signed out.");
    } catch (err) {
      setMessage(err.message);
    }
  };


  return (
    <div>
      {!user ? (
        <>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {!needsConfirmation ? (
            <div>
              <button onClick={handleSignUp}>Sign Up</button>
              <button onClick={handleSignIn}>Sign In</button>
            </div>
          ) : (
            <div>
              <input
                type="text"
                placeholder="6-digit code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <button onClick={handleConfirmSignUp}>Confirm Account</button>
            </div>
          )}
        </>
      ) : (
        <div>
          <p>Welcome, {user.username}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      )}

      {message && <p>{message}</p>}

    </div>
  );
}
