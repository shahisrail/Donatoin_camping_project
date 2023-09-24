import Cards from "../../Components/Cards/Cards";
import Banner from "../../Components/Header/Banner/Banner";
import { useLoaderData } from "react-router-dom";

const Homes = () => {
  const cards = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Cards cards={cards}></Cards>
    </div>
  );
};

export default Homes;
