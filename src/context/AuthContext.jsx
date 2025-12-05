/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";

// 1. Crear el contexto
export const AuthContext = createContext(null);

// 2. Crear el proveedor
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

 useEffect(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    const parsed = JSON.parse(storedUser);
    setTimeout(() => setUser(parsed), 0);
  }
}, []);


  // Simular login
  const login = (username) => {
    const newUser = { username };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

