import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <h1>Hola {user?.username}</h1>
      <button onClick={logout}>Cerrar sesión</button>
    </>
  );
}

export default Dashboard;
