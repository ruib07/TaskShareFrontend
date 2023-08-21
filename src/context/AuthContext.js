import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [selectedUserName, setSelectedUserName] = useState("");

  return (
    <AuthContext.Provider value={{ selectedUserName, setSelectedUserName }}>
      {children}
    </AuthContext.Provider>
  );
}
