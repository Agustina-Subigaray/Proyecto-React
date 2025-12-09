import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Si no hay usuario logueado, redirige a Login
    return <Navigate to="/login" replace />;
  }

  // Si está logueado, muestra el contenido
  return children;
}
