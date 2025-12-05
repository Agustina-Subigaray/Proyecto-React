import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username);
  };

  return (
    <>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresá tu usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button type="submit">Entrar</button>
      </form>
    </>
  );
}

export default Login;

