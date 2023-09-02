import React, { createContext, useEffect, useState } from "react";
import {
  createUserDocFromAuth,
  onAuthStateChangedListener,
} from "../config/firebase";
export const UserContext = createContext({
  currUser: null,
  setCurrUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState(null);
  const value = { currUser, setCurrUser };

  useEffect(() => {
    onAuthStateChangedListener(async (user) => {
      if (user) {
        await createUserDocFromAuth(user);
      }
      setCurrUser(user);
      console.log(user);
      console.log("user email and pic", user.email, user.photoURL);
    });

  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
