import React, { useState } from "react";

function Formulario() {
  const [texto, setTexto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim() === "") {
      alert("Por favor ingresa un texto");
    } else {
      alert("Texto ingresado: " + texto);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Formulario con alerta</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Escribe algo..."/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;
