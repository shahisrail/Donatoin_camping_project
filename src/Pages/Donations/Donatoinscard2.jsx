
import { Link } from "react-router-dom";
const Donatoinscard2 = ({ card }) => {
  const {
    id,
    image,
    category_description,
    category_name,
    title,
    Donate,
    color_card_bg,
    color_text,
    color_button,
  } = card || {};

  return (
    <div>
      
      <div
        className="card p-2 grid grid-cols-1 lg:grid-cols-2  lg:card-side md:h-[100vh] lg:h-auto bg-base-100 shadow-xl"
        style={{ backgroundColor: color_card_bg }}
      >
        <figure className=" w-50  ">
          <img className="h-35 lg:h-[35vh]  items-center" src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-start">
            <div
              className="p-1 rounded "
              style={{ backgroundColor: color_button }}
            >
              {category_name}
            </div>
          </div>
          <h2 className="card-title">{title}</h2>
          <p className="font-bold" style={{}}>
            ${Donate}.00
          </p>
          <div className="card-actions justify-start">
            <Link to={`/cards/${id}`}>
              <button className="btn " style={{ backgroundColor: color_text }}>
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donatoinscard2;
