function Card({ producto, eliminar, comprar }) {
  return (
    <div className="flex items-center justify-between border p-3 rounded shadow-sm">
      <div>
        <p className="font-medium">{producto.nombre}</p>
        <p className="text-sm text-gray-600">
          💲 {producto.precio.toFixed(2)} | 📦 {producto.categoria}
        </p>
      </div>
      <div className="flex gap-2">
        {!producto.comprado && (
          <button
            onClick={() => comprar(producto.id)}
            className="bg-green-600 text-white px-2 py-1 rounded"
          >
            ✔ Comprar
          </button>
        )}
        <button
          onClick={() => eliminar(producto.id)}
          className="bg-red-600 text-white px-2 py-1 rounded"
        >
          🗑 Eliminar
        </button>
      </div>
    </div>
  );
}

export default Card;
