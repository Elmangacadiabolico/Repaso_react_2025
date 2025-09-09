import React, { useState } from "react";

 function input() {
  const [texto, setTexto] = useState("");
  const [textoMostrado, setTextoMostrado] = useState("");
  const [numero, setNumero] = useState("");

  const MostrarTexto = () => {
    setTextoMostrado(texto.trim());
  };

  const doble = (Number(numero) || 0) * 2;
//algo 
  return (
    <div>

      <h3>Mostrar texto ingresado</h3>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribí algo…"
      />
      <button onClick={MostrarTexto}>Mostrar</button>
      <p> {textoMostrado}</p>

      <hr />

      <h3>Valor multiplicado en tiempo real</h3>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        placeholder="Ingresá un número"
      />
      <p>Valor x2: {doble}</p>
      <button onClick={() => setNumero("")}>Limpiar</button>
    </div>
  );
}
export default input
