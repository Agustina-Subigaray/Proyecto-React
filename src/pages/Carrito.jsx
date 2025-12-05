import { useContext } from "react";
import { CartContext } from "../contexts/cart-context.js";
import { FaTrash, FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Carrito() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const handleEliminar = (id, nombre) => {
    removeFromCart(id);
    toast.info(`${nombre} eliminado del carrito`);
  };

  const handleVaciar = () => {
    clearCart();
    toast.info("Carrito vaciado");
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Carrito</h1>

      {cart.length === 0 && <p>No hay productos en el carrito.</p>}

      <div className="row">
        {cart.map((p) => (
          <div className="col-md-4 mb-3" key={p.id}>
            <div className="card p-3 h-100">
              <h5>{p.nombre}</h5>
              <p>${p.precio}</p>
              <button
                className="btn btn-danger"
                onClick={() => handleEliminar(p.id, p.nombre)}
              >
                <FaTrashAlt /> Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <button className="btn btn-warning mt-3" onClick={handleVaciar}>
          <FaTrash /> Vaciar Carrito
        </button>
      )}
    </div>
  );
}

