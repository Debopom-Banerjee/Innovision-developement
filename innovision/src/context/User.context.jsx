import React, { createContext, useEffect, useState } from "react";
import {
  createUserDocFromAuth,
  onAuthStateChangedListener,
  auth,
} from "../config/firebase";
export const UserContext = createContext({
  currUser: null,
  setCurrUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState(null);

  const value = { currUser, setCurrUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        await createUserDocFromAuth(user);
      }
      setCurrUser(user);
    });
    return () => unsubscribe;
  }, [auth]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
