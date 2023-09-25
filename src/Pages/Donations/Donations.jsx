import { useEffect, useState } from "react";
import Donatoinscard2 from "./Donatoinscard2";

const Donations = () => {
  const [donaites, setDonaite] = useState([]);
  const [nodataFound, setDataFound] = useState("");
  useEffect(() => {
    const donatoinIteam = JSON.parse(localStorage.getItem("donaite"));
    if (donatoinIteam) {
      setDonaite(donatoinIteam);
    } else {
      console.log("no data found");
      setDataFound("no data found");
    }
  }, []);
  console.log(donaites);
  return (
    <div>
      {nodataFound ? (
        <p className="h-[80vh] flex justify-center items-center">
          {nodataFound}
        </p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5  p-5">
            {donaites.map((card) => (
              <Donatoinscard2 key={card.id} card={card}></Donatoinscard2>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Donations;
