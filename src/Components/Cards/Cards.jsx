import Card from "./Card";

const Cards = ({ cards }) => {

  return <div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3  p-4 my-5">
      {
        cards?.map(card => <Card key={card.id} card={card}></Card>)
      }
    </div>
  </div>;
};

export default Cards;
