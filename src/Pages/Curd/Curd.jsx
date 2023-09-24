import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Curd = () => {
  const [card, setCard] = useState({});
  const { id } = useParams();
  const parsedId = parseInt(id);
  const { image, category_description, title, Donate } = card || {};
  const cards = useLoaderData();

  useEffect(() => {
    const findCard = cards?.find((card) => card.id === parsedId);
    setCard(findCard);
  }, [id, cards]);

  return (
    <div className="relative container mx-auto">
      <div className="relative w-[70%] h-[70vh] mx-auto">
        <img
          className="w-full h-full rounded-lg object-cover"
          src={image}
          alt=""
        />
        <div
          className="absolute p-5 bottom-0 left-0 w-full"
          style={{ background: "rgba(11, 11, 11, 0.50)" }}
        >
          <button  className="btn">Donate{Donate}</button>
        </div>
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="text-lg">{category_description}</p>
      </div>
    </div>
  );
};

export default Curd;
