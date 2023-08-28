import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
// import styledZoo from "./Zoo.module.css";

export default function Zoo() {
  /* Escribe acá tu código */
  useEffect(() => {
    fetch("http://localhost:3001/zoo")
      .then((res) => res.json())
      .then((data) => {
        setZoo({
          ...zoo,
          animals: data.animals,
          species: data.species,
          allAnimals: data.animals,
        });
      })
      .catch((error) => console.log(error));
  }, []);

  const [zoo, setZoo] = useState({
    zooName: "",
    Animals: [],
    species: [],
    allAnimals: [],
  });

  const handleSpecies = (evento) => {};
  const handleAllSpecies = () => {};
  const handleInputChange = (evento) => {
    const nuevoNombre = evento.target.value;
    setZoo({
      Animals: zoo.Animals,
      species: zoo.species,
      allAnimals: zoo.allAnimals,
      zooName: nuevoNombre,
    });
  };

  return (
    <div>
      <label htmlFor="">Zoo Name</label>
      <input onChange={handleInputChange} value={zoo.zooName} />
      <h1>{zoo.zooName}</h1>
      <Animals />
    </div>
  );
}
