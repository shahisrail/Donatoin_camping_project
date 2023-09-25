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
            <a href="#">
              <h5
                style={{
                  color: color_text,
                  backgroundColor: color_button,
                  fontSize: "20px", 
                  border: "1px solid ", 
                  borderRadius: "10px",
                  padding: '5px',
                  
                }}
                className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                {category_name}
              </h5>
            </a>
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
