import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div>
      <h1>Panel de Administración</h1>
      <nav>
        <ul>
          <li><Link to="/productos">Gestionar Productos</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/carrito">Carrito</Link></li>
        </ul>
      </nav>
    </div>
  );
}
