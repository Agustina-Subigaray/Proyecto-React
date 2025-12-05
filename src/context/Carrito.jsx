import { useContext } from "react";
import { CartContext } from "../contexts/cart-context.js";

export default function Carrito() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div>
      <h1>Carrito</h1>
      {cart.length === 0 && <p>No hay productos.</p>}

      {cart.map((p, i) => (
        <div key={i}>
          {p.nombre} - ${p.precio}
          <button onClick={() => removeFromCart(p.id)}>Eliminar</button>
        </div>
      ))}

      {cart.length > 0 && (
        <button onClick={clearCart}>Vaciar Carrito</button>
      )}
    </div>
  );
}
