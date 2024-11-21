import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuth: false,
    userDetails: null,
    token: null,
  });

  const loginUser = (email, password) => {
    if (email === "bruce@wayne.com" && password === "gotham123") {
      const token = "r0bINJoKeRGoTham911";
      setAuthState({ isAuth: true, userDetails: { email },token: token });
      return { success: true, token  };
    } else {
      return { success: false, message: "Invalid credentials" };
    }
  };

  const logoutUser = () => {
    setAuthState({ isAuth: false, userDetails: null, token: null });
  };

  return (
    <AuthContext.Provider value={{ authState, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;