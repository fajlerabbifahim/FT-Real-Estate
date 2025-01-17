import React, { createContext } from "react";

export const AuthContext = createContext(null);
function AuthProvider({ children }) {
  const name = "Fahim Tanzila";

  const authInfo = {
    name,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
