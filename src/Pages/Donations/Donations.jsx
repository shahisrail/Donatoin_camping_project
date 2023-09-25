import { useEffect, useState } from "react";
import Donatoinscard2 from "./Donatoinscard2";

const Donations = () => {
  const [donaites, setDonaite] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const donatoinIteam = JSON.parse(localStorage.getItem("donaite"));
    if (donatoinIteam) {
      setDonaite(donatoinIteam);
    }
  }, []);

  const renderDonationItems = () => {
    if (showMore) {
      return donaites.map((card) => (
        <Donatoinscard2 key={card.id} card={card}></Donatoinscard2>
      ));
    } else {
      // Only show the first 4 items
      return donaites
        .slice(0, 4)
        .map((card) => (
          <Donatoinscard2 key={card.id} card={card}></Donatoinscard2>
        ));
    }
  };

  const toggleShowMore = () => {
    setShowMore(true);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
        {renderDonationItems()}
      </div>
      {!showMore && donaites.length > 4 && (
        <button
          onClick={toggleShowMore}
          style={{ display: "block", margin: "0 auto" }}
          className="btn mt-5 my-5"
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default Donations;
