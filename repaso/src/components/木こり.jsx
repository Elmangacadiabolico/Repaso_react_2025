import React from "react";

function 木こり() {
  const Peoples = ["lorenzo", "pepe", "Roberto", "Emanuel", "daniel", "jorge", "Satanas"];

  const personas = Peoples.map((person, index) => (
    <li key={index}>
      {person}{" "}
      <button onClick={() => alert(`tucaste a   ${person}`)}>
        Click
      </button>
    </li>
  ));

  return (
    <>
      <div className="container">
        <ul>{personas}</ul>
      </div>
    </>
  );
}

export default 木こり;
