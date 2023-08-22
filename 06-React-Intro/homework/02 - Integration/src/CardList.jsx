import Card from "./card";

function CardList({ props }) {
  return (
    <div>
      {props.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
}
export default CardList;
