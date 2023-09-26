import React from "react";
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
    <div className="p-5">
      <div
        style={{ backgroundColor: color_card_bg }}
        className="relative flex md:h-[40vh] p-3 md:p-0 flex-col w-full md:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
      >
        <div className="relative m-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src={image} alt="image" className="h-full  md:w-full object-cover" />
        </div>
        <div className="md:p-6">
          <h6
            style={{
              color: color_text,
              backgroundColor: color_button,
              border: "1px solid ",
              borderRadius: "10px",
              padding: "5px",
            }}
            className="mb-4 mt-5 block w-[43vh] lg:w-[18vh] text-center font-bold font-sans text-base  text-3x uppercase leading-relaxed tracking-normal antialiased"
          >
            {category_name}
          </h6>
          <h4 className="mb-2  text-black font-bold block font-sans text-2xl   leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h4>
          <p
            style={{ color: color_text }}
            className="mb-8 block font-sans font-bold text-2xl leading-relaxed  antialiased"
          >
            ${Donate}
          </p>
          <a className="inline-block" href="#">
            <Link to={`/cards/${id}`}>
              <button style={{ backgroundColor: color_button }} className="btn">
                view details
              </button>
            </Link>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Donatoinscard2;
