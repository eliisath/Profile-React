import React from "react";

function Hobbies() {

  const hobbies = [
    {
      id: 1,
      nombre: "Programar",
      descripcion: "Me encanta programar y estar al dia con nuevas tecnologias.",
    },
    {
      id: 2,
      nombre: "Viajar",
      descripcion: "Conocer lugares y viajar es una de mis pasiones.",
    },
    {
      id: 3,
      nombre: "Bailar",
      descripcion: "Me encantan los ritmos como la bachata y la salsa.",
    },
    {
      id: 4,
      nombre: "Jugar Videojuegos",
      descripcion: "En mis tiempos libres me gusta jugar un poco en pc, consola y juegos moviles.",
    },
  ];

  return (
    <div className="container">
      <h2>Mis Hobbies</h2>
      <ul className="list-group">
        {hobbies.map((hobby) => (
          <li key={hobby.id} className="list-group-item">
            <h3>{hobby.nombre}</h3>
            <p>{hobby.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Hobbies;
