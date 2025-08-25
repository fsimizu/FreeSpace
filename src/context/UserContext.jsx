import { createContext, useEffect, useState } from "react";
import { getCurrentUser, fetchUserAttributes, signOut } from "aws-amplify/auth";
import { Hub } from "aws-amplify/utils";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [attributes, setAttributes] = useState(null);

  const loadUser = async () => {
    try {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
      const attrs = await fetchUserAttributes();
      setAttributes(attrs);
    } catch {
      setUser(null);
      setAttributes(null);
    }
  };

  useEffect(() => {
    loadUser();
    // Listen for auth events
    const unsubscribe = Hub.listen("auth", ({ payload }) => {
      switch (payload.event) {
        case "signedIn":
          loadUser();
          break;
        case "signedOut":
          setUser(null);
          setAttributes(null);
          break;
        case "tokenRefresh":
          loadUser();
          break;
        default:
          break;
      }
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ user, attributes, signOut }}>
      {children}
    </UserContext.Provider>
  );
}
