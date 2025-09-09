import { useEffect, useState } from "react";

function Empresa() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/users");
        if (!res.ok) throw new Error("Eror");
        const data = await res.json();
        setUsuarios(data); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, []);

  const usuariosFiltrados = usuarios.filter(
    (u) =>
      u.username.toLowerCase().includes(filtro.toLowerCase()) ||
      u.email.toLowerCase().includes(filtro.toLowerCase())
  );

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos: {error}</p>;

  return (
    <div >
      <h1>Lista de Usuarios</h1>
      <input type="text" placeholder="Filtrar por usuario o email" value={filtro} onChange={(e) => setFiltro(e.target.value)}
      />

      <ul>
        {usuariosFiltrados.map((usuario) => (
          <li key={usuario.id} style={{ marginBottom: "10px" }}>
            <strong>{usuario.username}</strong> <br />
            <span>{usuario.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Empresa;
