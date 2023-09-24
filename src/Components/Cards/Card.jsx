import { Link } from "react-router-dom";
const Card = ({ card }) => {
  const { id, image, category_name, title } = card || {};
  return (
    <div>
      <Link to={`/cards/${id}`}>
        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="w-full" src={image} alt="" />

          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {category_name}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {title}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
