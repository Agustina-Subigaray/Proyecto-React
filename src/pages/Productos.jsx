import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Productos() {
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Vela Aromática", precio: 5000, descripcion: "Aroma lavanda" },
    { id: 2, nombre: "Difusor", precio: 8000, descripcion: "Difusor de aromas" },
  ]);

  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAgregar = (e) => {
    e.preventDefault();

    if (!nombre || precio <= 0 || descripcion.length < 10) {
      toast.error("Verificá los datos del producto");
      return;
    }

    if (editId) {
      setProductos(
        productos.map((p) =>
          p.id === editId ? { ...p, nombre, precio: Number(precio), descripcion } : p
        )
      );
      toast.success("Producto editado!");
      setEditId(null);
    } else {
      const newProducto = {
        id: Date.now(),
        nombre,
        precio: Number(precio),
        descripcion,
      };
      setProductos([...productos, newProducto]);
      toast.success("Producto agregado!");
    }

    setNombre("");
    setPrecio("");
    setDescripcion("");
  };

  const handleEditar = (producto) => {
    setNombre(producto.nombre);
    setPrecio(producto.precio);
    setDescripcion(producto.descripcion);
    setEditId(producto.id);
  };

  const handleEliminar = (id) => {
    if (window.confirm("¿Querés eliminar este producto?")) {
      setProductos(productos.filter((p) => p.id !== id));
      toast.info("Producto eliminado!");
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Productos</h1>

      <form className="mb-4" onSubmit={handleAgregar}>
        <div className="mb-2">
          <input
            type="text"
            placeholder="Nombre"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <input
            type="number"
            placeholder="Precio"
            className="form-control"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            placeholder="Descripción"
            className="form-control"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <button className="btn btn-success" type="submit">
          {editId ? "Guardar Cambios" : "Agregar Producto"}
        </button>
      </form>

      <div className="row">
        {productos.map((p) => (
          <div className="col-md-4 mb-3" key={p.id}>
            <div className="card p-3 h-100">
              <h5>{p.nombre}</h5>
              <p>${p.precio}</p>
              <p>{p.descripcion}</p>
              <button className="btn btn-primary me-2" onClick={() => handleEditar(p)}>
                <FaEdit /> Editar
              </button>
              <button className="btn btn-danger" onClick={() => handleEliminar(p.id)}>
                <FaTrash /> Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



