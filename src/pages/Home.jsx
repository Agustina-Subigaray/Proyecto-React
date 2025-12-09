
import { useContext } from "react";
import { CartContext } from "../context/cart-context.jsx";
import { FaCartPlus } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Home() {
  const { addToCart } = useContext(CartContext);

  const productos = [
    { id: 1, nombre: "Vela Aromática", precio: 5000 },
    { id: 2, nombre: "Difusor", precio: 8000 },
  ];

  const handleAgregar = (p) => {
    addToCart(p);
    toast.success(`${p.nombre} agregado al carrito!`);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Productos</h1>
      <div className="row">
        {productos.map((p) => (
          <div className="col-md-4 mb-3" key={p.id}>
            <div className="card p-3 h-100">
              <h5>{p.nombre}</h5>
              <p>${p.precio}</p>
              <button
                className="btn btn-primary"
                onClick={() => handleAgregar(p)}
              >
                <FaCartPlus /> Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

