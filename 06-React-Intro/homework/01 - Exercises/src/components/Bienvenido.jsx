import React from "react";
import Botones from "./Botones";

const studentName = "Alvaro";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // Definimos handleClick como una función
  const handleClick = (mensaje) => {
    alert(mensaje);
  };

  return (
    <div>
      <h1>Hola</h1>
      <h3>{studentName}</h3>
      <ul>
        {techSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      {/* Pasamos las funciones de manejo de clics como propiedades */}
      <Botones
        onClickM1={() => handleClick(alerts.m1)}
        onClickM2={() => handleClick(alerts.m2)}
      />
    </div>
  );
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
