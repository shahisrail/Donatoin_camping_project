import { Link } from "react-router-dom";
const Card = ({ card }) => {
  const {
    id,
    image,
    category_name,
    title,
    color_card_bg,
    color_text,
    color_button,
  } = card || {};
  return (
    <div>
      <Link to={`/cards/${id}`}>
        <div
          style={{ backgroundColor: color_card_bg }}
          className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
        >
          <img className="w-full h-[40vh]" src={image} alt="" />

          <div className="p-5">
          
            <div className="card-actions justify-start">
              <div
                className="p-1 rounded font-bold "
                style={{
                  color: color_text,
                  backgroundColor: color_button,

                  border: "1px solid ",
                  borderRadius: "10px",
                  padding: "5px",
                  width: "absolute",
                  
                }}
              >
                {category_name}
              </div>
            </div>

            <p
              style={{ color: color_text }}
              className="mb-3 font-normal text-gray-700 dark:text-gray-400"
            >
              {title}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
