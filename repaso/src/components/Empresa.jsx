import { useState } from "react";
import Card from "./Card";

function Empresa() {
  const [productos, setProductos] = useState([]);
  const [form, setForm] = useState({ nombre: "", precio: "", categoria: "" });

  const categorias = ["Lácteos", "Frutas", "Verduras", "Carnes", "Bebidas"];

  const Change = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const Submit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.precio || !form.categoria) return;

    const nuevoProducto = {
      id: Date.now(),
      nombre: form.nombre,
      precio: parseFloat(form.precio),
      categoria: form.categoria,
      comprado: false,
    };

    setProductos([...productos, nuevoProducto]);
    setForm({ nombre: "", precio: "", categoria: "" });
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter((p) => p.id !== id));
  };

  const marcar = (id) => {
    setProductos(productos.map((p) => p.id === id ? { ...p, comprado: true } : p))};

  return (
    <div>
      <h1 className="container">Lista de Supermercado</h1>

      <form onSubmit={Submit}>
        <input type="text" name="nombre" placeholder="Nombre de lo que quieres" value={form.nombre} onChange={Change}/>
        <input type="number" name="precio" placeholder="Precio" value={form.precio} onChange={Change}/>
        <select name="categoria" value={form.categoria} onChange={Change}>
          <option value="">Selecciona una categoría</option>
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button type="submit">Agregar</button>
      </form>

      <h2>Pendientes</h2>
      <div>
        {productos.filter((p) => !p.comprado).map((p) => (
            <Card
              key={p.id}
              producto={p}
              eliminar={eliminarProducto}
              comprar={marcar}
            />
          ))}
      </div>

      <h2>Comprados</h2>
      <div>
        {productos.filter((p) => p.comprado).map((p) => (
            <Card
              key={p.id}
              producto={p}
              eliminar={eliminarProducto}
            />
          ))}
      </div>
    </div>
  );
}

export default Empresa;
