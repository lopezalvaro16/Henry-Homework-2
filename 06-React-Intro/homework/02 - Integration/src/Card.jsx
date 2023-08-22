function Card({ character, clickHandler }) {
  return (
    <div>
      <h1>Nombre: {character.name}</h1>
      <h2>Casa: {character.house}</h2>
      <button onClick={clickHandler}>Haz click!</button>
    </div>
  );
}
export default Card;
