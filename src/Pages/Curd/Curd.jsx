import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonatoinCard from "./DonatoinCard";

const Curd = () => {
  const [card, setCard] = useState({});
  const { id } = useParams();
  const parsedId = parseInt(id);

  const cards = useLoaderData();

  

  useEffect(() => {
    const findCard = cards?.find((card) => card.id === parsedId);
    setCard(findCard);
  }, [id, cards]);

  return (
     <DonatoinCard card={card}></DonatoinCard>
  );
};

export default Curd;
