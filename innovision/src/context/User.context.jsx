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

  const [modalState, setModalState] = useState(false);

  const value = { currUser, setCurrUser, modalState, setModalState };

  useEffect(() => {
    onAuthStateChangedListener(async (user) => {
      if (user) {
        await createUserDocFromAuth(user);
      }
      setCurrUser(user);
    });
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
