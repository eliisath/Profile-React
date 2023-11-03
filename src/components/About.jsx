import React from "react";

function About() {
  
  const aboutData = {
    nombre: "Elisa Toro",
    edad: 27,
    profesion: "Desarrolladora Web",
    descripcion:
      "Soy una apasionada desarrolladora web.",
  };

  return (
    <div className="container">
      <h2>Acerca de Mí</h2>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{aboutData.nombre}</h3>
          <p className="card-text">Edad: {aboutData.edad} años</p>
          <p className="card-text">Profesión: {aboutData.profesion}</p>
          <p className="card-text">{aboutData.descripcion}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
